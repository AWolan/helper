'use strict';

var express = require('express'),
    router = express.Router(),
    salaryCore = require('C:/work/my/js/helper/server/core/salary.js');

router.route('/')
    .get(function (request, response) {
        var salaryList = salaryCore.getBaseList();
        response.json(salaryCore.calculateSalary(salaryList));
    });
router.route('/month/:year/:month')
    .get(function (request, response) {
        var salaryList = salaryCore.getBaseSalaryForMonth(request.params.year, request.params.month);
        response.json(salaryCore.calculateSalary(salaryList));
    });
router.route('/base')
    .get(function (request, response) {
        response.json(salaryCore.getBaseList());
    });

module.exports = router;