'use strict';

angular
    .module('details')
    .directive('monthDetails', ['detailsTitle', function (detailsTitle) {
        return {
            restrict: 'E',
            transclude: true,
            scope: {
                monthDetails: '=model'
            },
//            templateUrl: 'views/details/monthDetails.html',
            templateUrl: 'views/details/paymentDetails.html',
            link: function (scope, element, attrs, controllers) {
                scope.detailsTitle = detailsTitle.PL;
            }
        };
    }]);