'use strict';

var express = require('express'),
    router = express.Router(),
    core = serverRequire('/core/obligation.js');

router.route('/')
    .get(function (request, response) {
        var obligationList = core.getObligationData();
        response.json(obligationList);
    });
router.route('/month/:year/:month')
    .get(function (request, response) {
        var obligationList = core.getObligationForMonth(request.params.year, request.params.month);
        response.json(obligationList);
    });

module.exports = router;