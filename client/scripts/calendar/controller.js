'use strict';

angular
    .module('calendar', [])
    .controller('CalendarController', ['$scope', 'calendarRest', function ($scope, calendarRest) {
        calendarRest.getMonthList(2016, 1, 2, 4)
            .then(function (response) {
                $scope.monthList = response.data;
            });
    }]);