'use strict';

angular
    .module('obligation')
    .factory('obligationTitle', function () {
        return {
            PL: {
                name: 'Nazwa',
                group: 'Grupa',
                totalAmount: 'Całkowity koszt',
                left: 'Pozostało do spłaty',
                prev: 'Poprzednie',
                next: 'Następne',
                amount: 'Kwota',
                date: 'Data',
                details: {
                    name: 'Nazwa',
                    left: 'Pozostało',
                    plan: 'Planowane',
                    payment: 'Realizacja'
                }
            }
        };
    });