'use strict';

angular
    .module('obligation')
    .directive('paymentDetails', function () {
        return {
            restrict: 'E',
            transclude: true,
            scope: {
                paymentDetails: '=model',
                type: '=type'
            },
            templateUrl: 'views/obligation/paymentDetails.html'
        };
    })
    .directive('billDetails', function () {
        return {
            restrict: 'E',
            transclude: true,
            scope: {
                paymentDetails: '=model'
            },
            templateUrl: 'views/obligation/billDetails.html',
            link: function (scope, element, attrs, controllers) {
                scope.title = {
                    toPay: 'Do zapłaty',
                    paid: 'Zapłacone',
                    until: 'do',
                    on: 'dnia'
                };
            }
        };
    })
    .directive('creditDetails', function () {
        return {
            restrict: 'E',
            transclude: true,
            scope: {
                paymentDetails: '=model'
            },
            templateUrl: 'views/obligation/creditDetails.html',
            link: function (scope, element, attrs, controllers) {
                scope.title = {
                    toPay: 'Do spłaty',
                    paid: 'Spłacone',
                    until: 'do',
                    on: 'dnia'
                };
            }
        };
    })
    .directive('expenseDetails', function () {
        return {
            restrict: 'E',
            transclude: true,
            scope: {
                paymentDetails: '=model'
            },
            templateUrl: 'views/obligation/expenseDetails.html',
            link: function (scope, element, attrs, controllers) {
                scope.title = {
                    name: 'Wydatek',
                    amount: 'Kwota',
                    date: 'Data'
                };
            },
            link: function (scope, element, attrs, controllers) {
                scope.title = {
                    toPay: 'Do zapłaty',
                    until: 'do'
                };
            }
        };
    })
    .directive('tankDetails', function () {
        return {
            restrict: 'E',
            transclude: true,
            scope: {
                paymentDetails: '=model'
            },
            templateUrl: 'views/obligation/tankDetails.html',
            link: function (scope, element, attrs, controllers) {
                scope.title = {
                    toPay: 'Do zapłaty',
                    paid: 'Zapłacone',
                    until: 'do',
                    on: 'dnia'
                };
            }
        };
    })
    .directive('paymentList', function () {
        return {
            restrict: 'E',
            transclude: true,
            scope: {
                paymentList: '=list',
                type: '=type'
            },
            templateUrl: 'views/obligation/paymentList.html'
        };
    })
    .directive('billList', function () {
        return {
            restrict: 'E',
            transclude: true,
            scope: {
                paymentList: '=list'
            },
            templateUrl: 'views/obligation/billList.html',
            link: function (scope, element, attrs, controllers) {
                scope.title = {
                    name: 'Okres',
                    plan: 'Do zapłaty',
                    payment: 'Zapłacone',
                    amount: 'Kwota',
                    date: 'Data'
                };
            }
        };
    })
    .directive('creditList', function () {
        return {
            restrict: 'E',
            transclude: true,
            scope: {
                paymentList: '=list'
            },
            templateUrl: 'views/obligation/creditList.html',
            link: function (scope, element, attrs, controllers) {
                scope.title = {
                    name: 'Rata',
                    left: 'Pozostało',
                    plan: 'Do spłaty',
                    payment: 'Spłacone',
                    amount: 'Kwota',
                    date: 'Data'
                };
            }
        };
    })
    .directive('expenseList', function () {
        return {
            restrict: 'E',
            transclude: true,
            scope: {
                paymentList: '=list'
            },
            templateUrl: 'views/obligation/expenseList.html',
            link: function (scope, element, attrs, controllers) {
                scope.title = {
                    name: 'Wydatek',
                    amount: 'Kwota',
                    date: 'Data'
                };
            }
        };
    })
    .directive('tankList', function () {
        return {
            restrict: 'E',
            transclude: true,
            scope: {
                paymentList: '=list'
            },
            templateUrl: 'views/obligation/tankList.html',
            link: function (scope, element, attrs, controllers) {
                scope.title = {
                    name: 'Miesiąc',
                    plan: 'Planowane',
                    payment: 'Zrobione',
                    amount: 'Kwota',
                    date: 'Data',
                    literPrice: 'Cena za litr',
                    liters: 'Liczba litrów',
                    distance: 'Dystans',
                    consumption: 'Zużycie',
                    mileage: 'Przebieg'
                };
            }
        };
    });