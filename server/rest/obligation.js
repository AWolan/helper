'use strict';

var express = require('express'),
    router = express.Router(),
    obligationCore = require('C:/work/my/js/helper/server/core/obligation.js');

router.route('/')
    .get(function (request, response) {
        response.json(obligationCore.getObligationData());
    });
router.route('/month/:year/:month')
    .get(function (request, response) {
        response.json(obligationCore.getObligationForMonth(request.params.year, request.params.month));
    });

module.exports = router;