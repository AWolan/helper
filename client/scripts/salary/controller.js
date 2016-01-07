'use strict';

angular
    .module('salary', [])
    .controller('SalaryController', ['$scope', 'salaryRest', 'salaryTitle', function ($scope, salaryRest, salaryTitle) {
        salaryRest.getSalary()
            .then(function (response) {
                $scope.salaryList = response.data;
            });
        
        $scope.salaryTitle = salaryTitle.PL;
        
        $scope.onSalaryClick = function (salary) {
            salary.showDetails = !salary.showDetails;
        };
    }]);
