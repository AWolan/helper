'use strict';

angular
    .module('calendar')
    .factory('calendarRest', ['$http', '$q', function ($http, $q) {
        return {
            getMonthList: function (year, firstDay, cMonth, cDay) {
                return $http.get('/rest/calendar/year/' + year + '/' + firstDay + '/' + cMonth + '/' + cDay);
            }
        };
    }]);