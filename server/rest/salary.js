'use strict';

var express = require('express'),
    router = express.Router(),
    core = serverRequire('/core/salary.js');

router.route('/')
    .get(function (request, response) {
        var salaryBaseList = core.getBaseList(),
            salaryList = core.calculateSalary(salaryBaseList);
        response.json(salaryList);
    });
router.route('/month/:year/:month')
    .get(function (request, response) {
        var salaryBaseList = core.getBaseSalaryForPrevMonth(request.params.year, request.params.month),
            salaryList = core.calculateSalary(salaryBaseList);
        response.json(salaryList);
    });
router.route('/base')
    .get(function (request, response) {
        response.json(core.getBaseList());
    });

module.exports = router;