'use strict';

angular
    .module('salary')
    .factory('salaryTitle', function () {
        return {
            PL : {
                year: 'Rok',
                month: 'Miesiąc',
                gross: 'Brutto',
                net: 'Netto',
                retiringContribution: 'Składka emerytalna',
                rentContribution: 'Składka rentowa',
                illnessContribution: 'Składka chorobowa',
                healthContribution: 'Składka zdrowotna',
                taxContribution: 'Zaliczka na podatek'
            }
        };
    });