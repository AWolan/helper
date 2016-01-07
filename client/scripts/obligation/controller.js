'use strict';

angular
    .module('obligation', [])
    .controller('ObligationController', ['$scope', 'obligationRest', 'obligationTitle', function ($scope, obligationRest, obligationTitle) {
        obligationRest.getObligation()
            .then(function (response) {
                $scope.obligationList = response.data;
            });
        
        $scope.obligationTitle = obligationTitle.PL;
        $scope.onObligationClick = function (obligation) {
            obligation.showDetails = !obligation.showDetails;
        };
        $scope.typeList = [
            {
                id: '',
                name: 'Całość'
            },
            {
                id: 'bill',
                name: 'Rachunek'
            },
            {
                id: 'credit',
                name: 'Kredyt'
            },
            {
                id: 'expense',
                name: 'Wydatek'
            },
            {
                id: 'tank',
                name: 'Tankowanie'
            }
        ];
    }]);