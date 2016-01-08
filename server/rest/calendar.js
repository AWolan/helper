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

module.exports = router;