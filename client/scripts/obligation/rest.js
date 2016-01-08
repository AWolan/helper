'use strict';

angular
    .module('obligation')
    .factory('obligationRest', ['$http', '$q', function ($http, $q) {
        return {
            getObligation: function () {
                return $http.get('/rest/obligation');
            },
            getObligationForMonth: function (year, month) {
//                return $http.get('/rest/obligation/month/' + year + '/' + month);
                var deferred = $q.defer();
                $http.get('/rest/obligation/month/' + year + '/' + month)
                    .then(function (response) {
                        deferred.resolve(response);
                    }, function () {
                        deferred.reject("Error!");
                    });

                return deferred.promise;
            }
        };
    }]);
