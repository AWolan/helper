'use strict';

angular
    .module('obligation')
    .factory('obligationRest', ['$http', function ($http) {
        return {
            getObligation: function () {
                return $http.get('/rest/obligation');
            },
            getObligationForMonth: function (year, month) {
                return $http.get('/rest/obligation/month/' + year + '/' + month);
            }
        };
    }]);
