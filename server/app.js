'use strict';

var express, app, managerRest, salaryRest, obligationRest;

global.serverRequire = function(name) {
    return require(__dirname + '/' + name);
};

express = require('express');
app = express(),
managerRest = serverRequire('/rest/manager'),
salaryRest = serverRequire('/rest/salary'),
obligationRest = serverRequire('/rest/obligation');

app.use('/styles', express.static('C:/work/my/js/helper/client/styles'));
app.use('/scripts', express.static('C:/work/my/js/helper/client/scripts/client'));
app.use('/bower_components', express.static('C:/work/my/js/helper/bower_components'));
app.use(express.static('C:/work/my/js/helper/client'));

app.use('/rest/manager', managerRest);
app.use('/rest/salary', salaryRest);
app.use('/rest/obligation', obligationRest);

app.listen(3000);