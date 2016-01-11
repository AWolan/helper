'use strict';

angular
    .module('calendar')
    .directive('monthWeek', [function (detailsTitle) {
        return {
            restrict: 'E',
            transclude: true,
            scope: {
                month: '=model',
                firstDay: '=start'
            },
            templateUrl: 'views/calendar/monthWeek.html',
            link: function (scope, element, attrs, controllers) {
                var i, dayList = [],
                    first = scope.firstDay,
                    last = scope.firstDay + 7,
                    dayNames = [
                        'Niedziela',
                        'Poniedziałek',
                        'Wtorek',
                        'Środa',
                        'Czwartek',
                        'Piątek',
                        'Sobota'
                    ];
                
                for (i = first; i < last; i += 1) {
                    dayList.push(dayNames[i % 7]);
                }
                
                scope.title = {
                    dayList: dayList
                };
            }
        };
    }]);