'use strict';

angular
    .module('app')
    .factory('appRest', ['$http', function ($http) {
        return {
            getActualMonth: function () {
                return $http.get('/rest/manager/actualMonth');
            }
        };
    }]);