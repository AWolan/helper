'use strict';

var parse = serverRequire('/core/parse.js'),
    manager = serverRequire('/core/manager.js'),
    data = serverRequire('/data/obligation.js'),
    calculateTank = function (payment, prevPayment) {
        var i, tank, consumption, distance, liters, prevMileage,
            tankList = [];

        if (prevPayment && prevPayment.payment.length > 0) {
            prevMileage = prevPayment.payment[prevPayment.payment.length - 1].mileage;
        }

        for (i = 0; i < payment.payment.length; i += 1) {
            tank = payment.payment[i];
            distance = tank.mileage - prevMileage;
            prevMileage = tank.mileage;
            liters = tank.amount / tank.literPrice;
            consumption = liters / distance * 100;

            tankList.push({
                amount: tank.amount,
                date: tank.date,
                literPrice: tank.literPrice,
                mileage: tank.mileage,
                liters: liters,
                distance: distance,
                consumption: consumption
            });
        }

        return tankList;
    };

module.exports = {
    getList: function () {
        return data.obligationList;
    },
    getObligationForMonth: function (year, month) {
        var i, j, obligation, payment, date, dateString,
            totalAmount,
            result = [],
            paymentList = [],
            fullMonth = manager.getMonth(year, month);

        for (i = 0; i < data.obligationList.length; i += 1) {
            obligation = data.obligationList[i];
            paymentList = [];
            totalAmount = 0;
            for (j = 0; j < obligation.paymentList.length; j += 1) {
                payment = obligation.paymentList[j];
                dateString = payment.plan.date;
                date = parse.date(dateString, 'dd-mm-yyyy');

                if (date >= fullMonth.getFirstDay() && date <= fullMonth.getLastDay()) {
                    paymentList.push(payment);
                    totalAmount += payment.plan.amount;
                }
            }
            if (paymentList.length > 0) {
                result.push({
                    id: obligation.id,
                    name: obligation.name,
                    group: obligation.group,
                    type: obligation.type,
                    totalAmount: totalAmount,
                    paymentList: paymentList
                });
            }
        }

        return result;
    },
    getObligationData: function () {
        var i, j, obligation, payment, firtNotDone, prevPayment,
            totalAmount, left,
            result = [],
            paymentList = [];

        for (i = 0; i < data.obligationList.length; i += 1) {
            obligation = data.obligationList[i];
            paymentList = [];
            totalAmount = 0;
            left = 0;
            firtNotDone = null;
            prevPayment = null;
            for (j = 0; j < obligation.paymentList.length; j += 1) {
                payment = obligation.paymentList[j];
                totalAmount += payment.plan.amount;

                if (!payment.done) {
                    left += payment.plan.amount;
                }
                if (!firtNotDone && !payment.done) {
                    firtNotDone = j;
                }
                if (obligation.type === 'tank') {
                    payment.payment = calculateTank(payment, prevPayment);
                    prevPayment = payment;
                }
            }
            result.push({
                id: obligation.id,
                name: obligation.name,
                group: obligation.group,
                type: obligation.type,
                totalAmount: totalAmount,
                left: left,
                prev: obligation.paymentList[firtNotDone - 1],
                next: obligation.paymentList[firtNotDone],
                paymentList: obligation.paymentList
            });
        }

        return result;
    }
};
