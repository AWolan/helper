'use strict';

var express = require('express'),
    router = express.Router(),
    core = serverRequire('/core/manager.js');

router.route('/actualMonth')
    .get(function (request, response) {
        var actual = core.getActualMonth();
        response.json(actual);
    });

module.exports = router;