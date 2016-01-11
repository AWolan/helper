'use strict';

var express = require('express'),
    router = express.Router(),
    core = serverRequire('/core/calendar.js');

router.route('/generate/:year/:month/:day')
    .get(function (request, response) {
        var year = parseInt(request.params.year, 10),
            month = parseInt(request.params.month, 10),
            day = parseInt(request.params.day, 10),
            yearList = core.generateYear(year, month, day);
        response.json(yearList);
    });
router.route('/month/:year/:month/:firstDay/:cMonth/:cDay')
    .get(function (request, response) {
        var year = parseInt(request.params.year, 10),
            month = parseInt(request.params.month, 10),
            firstDay = parseInt(request.params.firstDay, 10),
            cMonth = parseInt(request.params.cMonth, 10),
            cDay = parseInt(request.params.cDay, 10),
            calendar = core.generateYear(year, cMonth, cDay),
            monthDetails = core.getMonth(calendar, month, firstDay);
        response.json(monthDetails);
    });

module.exports = router;