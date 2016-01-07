'use strict';

var math = require('C:/work/my/js/helper/server/core/math.js'),
    parse = require('C:/work/my/js/helper/server/core/parse.js'),
    manager = require('C:/work/my/js/helper/server/core/manager.js'),
    data = require('C:/work/my/js/helper/server/data/salary.js'),
    sum = function (list) {
        var i, result = 0;
        for (i = 0; i < list.length; i += 1) {
            result += list[i];
        }
        return result;
    },
    calculateGross = function (salaryBase) {
        return math.sum([
            salaryBase.base * salaryBase.x,
            salaryBase.equalization,
            salaryBase.overtime,
            salaryBase.bonus,
            salaryBase.leave,
            salaryBase.healthLeave
        ]);
    },
    calculateInsuranceBase = function (salaryBase) {
        return math.sum([
            salaryBase.base * salaryBase.x,
            salaryBase.equalization,
            salaryBase.overtime,
            salaryBase.bonus,
            salaryBase.leave,
            salaryBase.medicalCare,
            salaryBase.insurance
        ]);
    },
    calculateInsuranceContribution = function (insuranceBase) {
        var retiringContribution = data.salaryConst.retiringFactor * insuranceBase,
            rentContribution = data.salaryConst.rentFactor * insuranceBase,
            illnessContribution = data.salaryConst.illnessFactor * insuranceBase,
            insuranceContribution = math.sum([
                retiringContribution,
                rentContribution,
                illnessContribution
            ]);
        return {
            retiringContribution: retiringContribution,
            rentContribution: rentContribution,
            illnessContribution: illnessContribution,

            getInsuranceContribution: function () {
                return insuranceContribution;
            }
        };
    },
    calculateHealthBase = function (insuranceBase, insuranceContribution, healthLeave) {
        return math.sum([
            insuranceBase,
            healthLeave,
            -insuranceContribution.getInsuranceContribution()
        ]);
    },
    calculateHealthContribution = function (healthInsuranceBase) {
        return data.salaryConst.healthFactor * healthInsuranceBase;
    },
    calculateTaxBase = function (insuranceBase, insuranceContribution, benefit) {
        var taxBase;

        if (insuranceBase > 0) {
            taxBase = math.sum([
                insuranceBase,
                benefit,
                -insuranceContribution.getInsuranceContribution(),
                -data.salaryConst.deductibleCost
            ]);
        } else {
            taxBase = 0;
        }
        return taxBase;
    },
    calculateTaxContribution = function (taxBase, healthBase) {
        var taxContribution;

        if (taxBase > 0) {
            taxContribution = math.sum([
                data.salaryConst.taxFactor * taxBase,
                -data.salaryConst.taxRelief,
                -data.salaryConst.healthTaxFactor * healthBase
            ]);
        } else {
            taxContribution = 0;
        }
        return taxContribution;
    },
    calculateNet = function (gross, insuranceContribution, healthContribution, taxContribution) {
        return math.sum([
            gross,
            -insuranceContribution.getInsuranceContribution(),
            -healthContribution,
            -taxContribution
        ]);
    },
    calculateSalary = function (salaryBase) {
        var gross = calculateGross(salaryBase),
            insuranceBase = calculateInsuranceBase(salaryBase),
            insuranceContribution = calculateInsuranceContribution(insuranceBase),
            healthBase = calculateHealthBase(insuranceBase, insuranceContribution, salaryBase.healthLeave),
            healthContribution = calculateHealthContribution(healthBase),
            taxBase = calculateTaxBase(insuranceBase, insuranceContribution, salaryBase.benefit),
            taxContribution = calculateTaxContribution(taxBase, healthBase),
            net = calculateNet(gross, insuranceContribution, healthContribution, taxContribution);

        return {
            year: salaryBase.year,
            month: salaryBase.month,
            gross: gross,
            net: net,
            retiringContribution: insuranceContribution.retiringContribution,
            rentContribution: insuranceContribution.rentContribution,
            illnessContribution: insuranceContribution.illnessContribution,
            healthContribution: healthContribution,
            taxContribution: taxContribution,
            showDetails: false
        };
    };


module.exports = {
    getBaseList: function () {
        return data.baseList;
    },
    calculateSalary: function (salaryBaseList) {
        var i, salary,
            salaryList = [];

        for (i = 0; i < salaryBaseList.length; i += 1) {
            salary = calculateSalary(salaryBaseList[i]);
            salaryList.push(salary);
        }
        return salaryList;
    },
    getBaseSalaryForMonth: function (year, month) {
        var i, date, salaryBase, result = [],
            fullMonth = manager.getMonth(year, month);
        for (i = 0; i < data.baseList.length; i += 1) {
            salaryBase = data.baseList[i];
            date = parse.date(salaryBase.date, 'dd-mm-yyyy');
            if (date >= fullMonth.getFirstDay() && date <= fullMonth.getLastDay()) {
                result.push(salaryBase);
            }
        }
        return result;
    }
};