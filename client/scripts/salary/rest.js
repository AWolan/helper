'use strict';

angular
    .module('salary')
    .factory('salaryRest', ['$http', function ($http) {
        return {
            getSalary: function () {
                return $http.get('/rest/salary');
            },
            getSalaryBase: function () {
                return $http.get('/rest/salary/base');
            },
            getSalaryForMonth: function (year, month) {
                return $http.get('/rest/salary/month/' + year + '/' + month);
            }
        };
    }]);
