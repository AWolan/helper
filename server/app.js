'use strict';

var express, app, managerRest, salaryRest, obligationRest, basePath;

global.serverRequire = function(name) {
    return require(__dirname + '/' + name);
};

express = require('express');
app = express();
managerRest = serverRequire('/rest/manager');
salaryRest = serverRequire('/rest/salary');
obligationRest = serverRequire('/rest/obligation');
basePath = __dirname + '/..';

app.use('/styles', express.static(basePath + '/client/styles'));
app.use('/scripts', express.static(basePath + '/client/scripts'));
app.use('/bower_components', express.static(basePath + '/bower_components'));
app.use(express.static(basePath + '/client'));

app.use('/rest/manager', managerRest);
app.use('/rest/salary', salaryRest);
app.use('/rest/obligation', obligationRest);

app.listen(3000);