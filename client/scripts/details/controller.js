'use strict';

angular
    .module('details', [])
    .controller('DetailsController', ['$scope', '$q', 'appRest', 'salaryRest', 'obligationRest', function ($scope, $q, appRest, salaryRest, obligationRest) {
        appRest.getActualMonth()
            .then(function (response) {
                var actual = response.data.actual,
                    prev = response.data.prev,
                    next = response.data.next;
            
                // actual month
                $q.all([
                    salaryRest.getSalaryForMonth(actual.year, actual.month),
                    obligationRest.getObligationForMonth(actual.year, actual.month)
                ])
                    .then(function (responseArray) {
                        var salaryResponse = responseArray[0],
                            obligationResponse = responseArray[1];

                        $scope.actualMonth = {
                            date: actual,
                            salaryList: salaryResponse.data,
                            obligationList: obligationResponse.data
                        };

                    });
                // prev month
                $q.all([
                    salaryRest.getSalaryForMonth(prev.year, prev.month),
                    obligationRest.getObligationForMonth(prev.year, prev.month)
                ])
                    .then(function (responseArray) {
                        var salaryResponse = responseArray[0],
                            obligationResponse = responseArray[1];

                        $scope.prevMonth = {
                            date: prev,
                            salaryList: salaryResponse.data,
                            obligationList: obligationResponse.data
                        };

                    });
                // next month
                $q.all([
                    salaryRest.getSalaryForMonth(next.year, next.month),
                    obligationRest.getObligationForMonth(next.year, next.month)
                ])
                    .then(function (responseArray) {
                        var salaryResponse = responseArray[0],
                            obligationResponse = responseArray[1];

                        $scope.nextMonth = {
                            date: next,
                            salaryList: salaryResponse.data,
                            obligationList: obligationResponse.data
                        };

                    });
            });
        
    }]);