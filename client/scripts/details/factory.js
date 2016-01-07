'use strict';

angular
    .module('details')
    .factory('detailsTitle', function () {
        return {
            PL: {
                show: 'Pokaż miesiąc',
                month: 'Miesiąc',
                salary: {
                    main: 'Wynagrodzenie',
                    date: 'Za miesiąc',
                    amount: 'Kwota'
                },
                obligation: {
                    main: 'Opłaty',
                    name: 'Nazwa',
                    group: 'Grupa',
                    list: 'Płatności',
                    plan: 'Do zapłaty',
                    payment: 'Zapłacone',
                    date: 'Data',
                    amount: 'Kwota'
                }
            },
            EN: {
                show: 'Show month',
                month: 'Month',
                salary: {
                    main: 'Salary',
                    date: 'For month',
                    amount: 'Amount'
                },
                obligation: {
                    main: 'Obligations',
                    name: 'Name',
                    group: 'Group',
                    list: 'Payments',
                    plan: 'To pay',
                    payment: 'Paid',
                    date: 'Date',
                    amount: 'Amount'
                }
            }
        };
    });
//    .factory('actualMonths', function () {
//        var list = [],
//            now = new Date(),
//            FullMonth = function (year, month) {
//                return {
//                    year: year,
//                    month: month,
//                    getFirstDay: function () {
//                        if (this.year && this.month) {
//                            return new Date(this.year, this.month - 1, 1);
//                        } else {
//                            return null;
//                        }
//                    },
//                    getLastDay: function () {
//                        if (this.year && this.month) {
//                            return new Date(this.year, this.month, 0);
//                        } else {
//                            return null;
//                        }
//                    },
//                    getPrevMonth: function () {
//                        var year = this.month === 1 ? this.year - 1 : this.year,
//                            month = this.month === 1 ? 12 : this.month - 1;
//                        
//                        return new FullMonth(year, month);
//                    },
//                    getNextMonth: function () {
//                        var year = this.month === 12 ? this.year + 1 : this.year,
//                            month = this.month === 12 ? 1 : this.month + 1;
//                        
//                        return new FullMonth(year, month);
//                    }
//                };
//            },
//            actual = new FullMonth(now.getFullYear(), now.getMonth() + 1);
//    
//        return {
//            actual: actual,
//            prev: actual.getPrevMonth(),
//            next: actual.getNextMonth()
//        };
//    });