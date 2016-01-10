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
    },
    getPayment = function (payment) {
        var i, size, last, elemet, total = 0, list = [], result = null;
        if (payment) {
            if (payment.length > 0) {
                size = payment.length;
                last = payment[0];
                for (i = 0; i < payment.length; i += 1) {
                    elemet = payment[i];
                    total += elemet.amount;
                    list.push(elemet);
                    if (parse.date(elemet.date, 'dd-mm-yyyy') > parse.date(last.date, 'dd-mm-yyyy')) {
                        last = elemet;
                    }
                }
            } else {
                size = 1;
                total = payment.amount;
                last = payment;
                list.push(payment);
            }
            result = {
                total: total,
                last: last,
                size: size,
                list: payment
            };
        }
        
        return result;
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
    getPaymentForMonth: function (year, month) {
        var i, j, obligation, payment, date, total, paymentDetails,
            paymentList = [],
            fullMonth = manager.getMonth(year, month);

        for (i = 0; i < data.obligationList.length; i += 1) {
            obligation = data.obligationList[i];
            for (j = 0; j < obligation.paymentList.length; j += 1) {
                payment = obligation.paymentList[j];
                date = parse.date(payment.plan.date, 'dd-mm-yyyy');
                
                if (date >= fullMonth.getFirstDay() && date <= fullMonth.getLastDay()) {
                    paymentDetails = getPayment(payment.payment);
                    total = paymentDetails ? paymentDetails.total : 0;
                    paymentList.push({
                        id: obligation.id,
                        name: obligation.name,
                        group: obligation.group,
                        type: obligation.type,
                        paymentName: payment.name,
                        done: payment.done,
                        left: payment.plan.amount - total,
                        plan: payment.plan,
                        payment: paymentDetails
                    });
                }
            }
        }

        return paymentList;
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
