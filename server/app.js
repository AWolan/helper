'use strict';

var express = require('express'),
    app = express(),
    salaryRest = require('C:/work/my/js/helper/server/rest/salary'),
    obligationRest = require('C:/work/my/js/helper/server/rest/obligation');


app.use('/styles', express.static('C:/work/my/js/helper/client/styles'));
app.use('/scripts', express.static('C:/work/my/js/helper/client/scripts/client'));
app.use('/bower_components', express.static('C:/work/my/js/helper/bower_components'));
app.use(express.static('C:/work/my/js/helper/client'));

app.use('/rest/salary', salaryRest);
app.use('/rest/obligation', obligationRest);

app.listen(3000);