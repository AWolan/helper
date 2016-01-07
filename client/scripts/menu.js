'use strict';

angular
    .module('menu', [])
    .factory('menuTitle', function () {
        return {
            PL: {
                main: 'Strona główna',
                salary: 'Wynagrodzenie',
                obligation: 'Zobowiązania',
                details: 'Podsumowanie'
            }
        };
    })
    .controller('menuController', ['$scope', 'menuTitle', function ($scope, menuTitle) {
        var title = menuTitle.PL;
        $scope.menuItems = [
            {
                title: title.main,
                link: '/',
                icon: 'main.png'
            },
            {
                title: title.salary,
                link: '/salary',
                icon: 'salary.png'
            },
            {
                title: title.obligation,
                link: '/obligation',
                icon: 'obligation.png'
            },
            {
                title: title.details,
                link: '/details',
                icon: 'details.png'
            }
        ];
    }]);