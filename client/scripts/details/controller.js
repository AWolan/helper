'use strict';

angular
    .module('details', [])
    .controller('DetailsController', ['$scope', '$q', 'actualMonths', 'salaryRest', 'obligationRest', function ($scope, $q, actualMonths, salaryRest, obligationRest) {
        // actual month
        $q.all([
            salaryRest.getSalaryForMonth(actualMonths.actual.getPrevMonth().year, actualMonths.actual.getPrevMonth().month),
            obligationRest.getObligationForMonth(actualMonths.actual.year, actualMonths.actual.month)
        ])
            .then(function (responseArray) {
                var salaryResponse = responseArray[0],
                    obligationResponse = responseArray[1];
                
                $scope.actualMonth = {
                    date: actualMonths.actual,
                    salaryList: salaryResponse.data,
                    obligationList: obligationResponse.data
                };
                
            });
        // prev month
        $q.all([
            salaryRest.getSalaryForMonth(actualMonths.prev.getPrevMonth().year, actualMonths.prev.getPrevMonth().month),
            obligationRest.getObligationForMonth(actualMonths.prev.year, actualMonths.prev.month)
        ])
            .then(function (responseArray) {
                var salaryResponse = responseArray[0],
                    obligationResponse = responseArray[1];
                
                $scope.prevMonth = {
                    date: actualMonths.prev,
                    salaryList: salaryResponse.data,
                    obligationList: obligationResponse.data
                };
                
            });
        // next month
        $q.all([
            salaryRest.getSalaryForMonth(actualMonths.next.getPrevMonth().year, actualMonths.next.getPrevMonth().month),
            obligationRest.getObligationForMonth(actualMonths.next.year, actualMonths.next.month)
        ])
            .then(function (responseArray) {
                var salaryResponse = responseArray[0],
                    obligationResponse = responseArray[1];
                
                $scope.nextMonth = {
                    date: actualMonths.next,
                    salaryList: salaryResponse.data,
                    obligationList: obligationResponse.data
                };
                
            });
        
        
    }]);