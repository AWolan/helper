'use strict';

var rent = {
        id: 1,
        name: 'Bezpieczna - Czynsz',
        group: 'Mieszkanie',
        type: 'bill',
        paymentList: [
            {
                no: 1,
                name: 'Marzec 2015',
                done: true,
                plan: {
                    amount: 650.00,
                    date: '31-03-2015'
                },
                payment:  {
                    amount: 650.00,
                    date: '20-03-2015'
                }
            },
            {
                no: 2,
                name: 'Kwiecień 2015',
                done: true,
                plan: {
                    amount: 650.00,
                    date: '30-04-2015'
                },
                payment:  {
                    amount: 650.00,
                    date: '20-05-2015'
                }
            },
            {
                no: 3,
                name: 'Maj 2015',
                done: true,
                plan: {
                    amount: 650.00,
                    date: '31-05-2015'
                },
                payment:  {
                    amount: 650.00,
                    date: '20-05-2015'
                }
            },
            {
                no: 4,
                name: 'Czerwiec 2015',
                done: true,
                plan: {
                    amount: 650.00,
                    date: '30-06-2015'
                },
                payment:  {
                    amount: 650.00,
                    date: '20-07-2015'
                }
            },
            {
                no: 5,
                name: 'Lipiec 2015',
                done: true,
                plan: {
                    amount: 650.00,
                    date: '31-07-2015'
                },
                payment:  {
                    amount: 650.00,
                    date: '20-07-2015'
                }
            },
            {
                no: 6,
                name: 'Sierpień 2015',
                done: true,
                plan: {
                    amount: 1300.00,
                    date: '31-08-2015'
                },
                payment:  {
                    amount: 1300.00,
                    date: '20-09-2015'
                }
            },
            {
                no: 7,
                name: 'Wrzesień 2015',
                done: true,
                plan: {
                    amount: 1300.00,
                    date: '30-09-2015'
                },
                payment:  {
                    amount: 1300.00,
                    date: '20-09-2015'
                }
            },
            {
                no: 8,
                name: 'Październik 2015',
                done: true,
                plan: {
                    amount: 1300.00,
                    date: '31-10-2015'
                },
                payment:  {
                    amount: 1300.00,
                    date: '15-10-2015'
                }
            },
            {
                no: 9,
                name: 'Listopad 2015',
                done: true,
                plan: {
                    amount: 1300.00,
                    date: '30-11-2015'
                },
                payment:  {
                    amount: 1300.00,
                    date: '15-11-2015'
                }
            },
            {
                no: 10,
                name: 'Grudzień 2015',
                done: true,
                plan: {
                    amount: 1300.00,
                    date: '31-12-2015'
                },
                payment:  {
                    amount: 1300.00,
                    date: '28-11-2015'
                }
            },
            {
                no: 11,
                name: 'Styczeń 2016',
                done: false,
                plan: {
                    amount: 1300.00,
                    date: '31-01-2016'
                },
                payment:  {
                    amount: 0.00,
                    date: null
                }
            },
            {
                no: 12,
                name: 'Luty 2016',
                done: false,
                plan: {
                    amount: 1300.00,
                    date: '28-02-2016'
                },
                payment:  {
                    amount: 0.00,
                    date: null
                }
            },
            {
                no: 13,
                name: 'Marzec 2016',
                done: false,
                plan: {
                    amount: 1300.00,
                    date: '31-03-2016'
                },
                payment:  {
                    amount: 0.00,
                    date: null
                }
            },
            {
                no: 14,
                name: 'Kwiecień 2016',
                done: false,
                plan: {
                    amount: 1300.00,
                    date: '30-04-2016'
                },
                payment:  {
                    amount: 0.00,
                    date: null
                }
            },
            {
                no: 15,
                name: 'Maj 2016',
                done: false,
                plan: {
                    amount: 1300.00,
                    date: '31-05-2016'
                },
                payment:  {
                    amount: 0.00,
                    date: null
                }
            },
            {
                no: 16,
                name: 'Czerwiec 2016',
                done: false,
                plan: {
                    amount: 1300.00,
                    date: '30-06-2016'
                },
                payment:  {
                    amount: 0.00,
                    date: null
                }
            },
            {
                no: 17,
                name: 'Lipiec 2016',
                done: false,
                plan: {
                    amount: 1300.00,
                    date: '31-07-2016'
                },
                payment:  {
                    amount: 0.00,
                    date: null
                }
            },
            {
                no: 18,
                name: 'Sierpień 2016',
                done: false,
                plan: {
                    amount: 1300.00,
                    date: '31-08-2016'
                },
                payment:  {
                    amount: 1300.00,
                    date: null
                }
            },
            {
                no: 19,
                name: 'Wrzesień 2016',
                done: false,
                plan: {
                    amount: 1300.00,
                    date: '30-09-2016'
                },
                payment:  {
                    amount: 0.00,
                    date: null
                }
            },
            {
                no: 20,
                name: 'Październik 2016',
                done: false,
                plan: {
                    amount: 1300.00,
                    date: '31-10-2016'
                },
                payment:  {
                    amount: 0.00,
                    date: null
                }
            },
            {
                no: 21,
                name: 'Listopad 2016',
                done: false,
                plan: {
                    amount: 1300.00,
                    date: '30-11-2016'
                },
                payment:  {
                    amount: 0.00,
                    date: null
                }
            },
            {
                no: 22,
                name: 'Grudzień 2016',
                done: false,
                plan: {
                    amount: 1300.00,
                    date: '31-12-2016'
                },
                payment:  {
                    amount: 0.00,
                    date: null
                }
            }
        ]
    },
    electricity = {
        id: 2,
        name: 'Bezpieczna - Prąd',
        group: 'Mieszkanie',
        type: 'bill',
        paymentList: [
            {
                no: 1,
                name: 'Październik 2015',
                done: true,
                plan: {
                    amount: 34.80,
                    date: '14-10-2015'
                },
                payment:  {
                    amount: 34.80,
                    date: '29-09-2015'
                }
            },
            {
                no: 2,
                name: 'Listopad 2015',
                done: true,
                plan: {
                    amount: 85.20,
                    date: '14-11-2015'
                },
                payment:  {
                    amount: 85.20,
                    date: '28-10-2015'
                }
            },
            {
                no: 3,
                name: 'Grudzień 2015',
                done: true,
                plan: {
                    amount: 85.20,
                    date: '14-12-2015'
                },
                payment:  {
                    amount: 85.20,
                    date: '29-11-2015'
                }
            },
            {
                no: 4,
                name: 'Styczeń 2016',
                done: true,
                plan: {
                    amount: 85.20,
                    date: '14-01-2016'
                },
                payment:  {
                    amount: 85.20,
                    date: '09-01-2016'
                }
            },
            {
                no: 5,
                name: 'Luty 2016',
                done: true,
                plan: {
                    amount: 85.20,
                    date: '14-02-2016'
                },
                payment:  {
                    amount: 85.20,
                    date: '09-01-2016'
                }
            },
            {
                no: 6,
                name: 'Marzec 2016',
                done: false,
                plan: {
                    amount: 85.20,
                    date: '14-03-2016'
                },
                payment:  {
                    amount: 0.00,
                    date: ''
                }
            },
            {
                no: 7,
                name: 'Kwiecień 2016',
                done: false,
                plan: {
                    amount: 85.20,
                    date: '14-04-2016'
                },
                payment:  {
                    amount: 0.00,
                    date: ''
                }
            },
            {
                no: 8,
                name: 'Maj 2016',
                done: false,
                plan: {
                    amount: 85.20,
                    date: '14-05-2016'
                },
                payment:  {
                    amount: 0.00,
                    date: ''
                }
            },
            {
                no: 9,
                name: 'Czerwiec 2016',
                done: false,
                plan: {
                    amount: 85.20,
                    date: '14-06-2016'
                },
                payment:  {
                    amount: 0.00,
                    date: ''
                }
            }
        ]
    },
    gas = {
        id: 3,
        name: 'Bezpieczna - Gaz',
        group: 'Mieszkanie',
        type: 'bill',
        paymentList: [
            {
                no: 1,
                name: 'Wrzesień/Październik 2015',
                done: true,
                plan: {
                    amount: 20.34,
                    date: '31-10-2015'
                },
                payment:  {
                    amount: 20.34,
                    date: '29-09-2015'
                }
            },
            {
                no: 2,
                name: 'Listopad/Grudzień 2015',
                done: true,
                plan: {
                    amount: 20.34,
                    date: '31-12-2015'
                },
                payment:  {
                    amount: 20.34,
                    date: '30-11-2015'
                }
            },
            {
                no: 3,
                name: 'Styczeń/Luty 2016',
                done: true,
                plan: {
                    amount: 20.34,
                    date: '29-02-2016'
                },
                payment:  {
                    amount: 20.34,
                    date: '09-01-2016'
                }
            },
            {
                no: 4,
                name: 'Marzec/Kwiecień 2016',
                done: false,
                plan: {
                    amount: 20.34,
                    date: '30-04-2016'
                },
                payment:  {
                    amount: 0.00,
                    date: ''
                }
            },
            {
                no: 5,
                name: 'Maj/Czerwiec 2016',
                done: false,
                plan: {
                    amount: 20.34,
                    date: '30-06-2016'
                },
                payment:  {
                    amount: 0.00,
                    date: ''
                }
            },
            {
                no: 6,
                name: 'Lipiec/Sierpień 2016',
                done: false,
                plan: {
                    amount: 20.34,
                    date: '31-08-2016'
                },
                payment:  {
                    amount: 0.00,
                    date: ''
                }
            },
            {
                no: 7,
                name: 'Wrzesień/Październik 2016',
                done: false,
                plan: {
                    amount: 20.34,
                    date: '31-10-2016'
                },
                payment:  {
                    amount: 0.00,
                    date: ''
                }
            },
            {
                no: 8,
                name: 'Listopad/Grudzień 2016',
                done: false,
                plan: {
                    amount: 20.34,
                    date: '31-12-2016'
                },
                payment:  {
                    amount: 0.00,
                    date: ''
                }
            }
        ]
    },
    food = {
        id: 4,
        name: 'Jedzenie',
        group: 'Wyżywienie',
        type: 'expense',
        paymentList: [
            {
                no: 1,
                name: 'Styczeń 2015',
                done: true,
                plan: {
                    amount: 300.00,
                    date: '31-01-2015'
                }
            },
            {
                no: 2,
                name: 'Luty 2015',
                done: true,
                plan: {
                    amount: 300.00,
                    date: '28-02-2015'
                }
            },
            {
                no: 3,
                name: 'Marzec 2015',
                done: true,
                plan: {
                    amount: 300.00,
                    date: '31-03-2015'
                }
            },
            {
                no: 4,
                name: 'Kwiecień 2015',
                done: true,
                plan: {
                    amount: 300.00,
                    date: '30-04-2015'
                }
            },
            {
                no: 5,
                name: 'Maj 2015',
                done: true,
                plan: {
                    amount: 300.00,
                    date: '31-05-2015'
                }
            },
            {
                no: 6,
                name: 'Czerwiec 2015',
                done: true,
                plan: {
                    amount: 300.00,
                    date: '30-06-2015'
                }
            },
            {
                no: 7,
                name: 'Lipiec 2015',
                done: true,
                plan: {
                    amount: 300.00,
                    date: '31-07-2015'
                }
            },
            {
                no: 8,
                name: 'Sierpień 2015',
                done: true,
                plan: {
                    amount: 1000.00,
                    date: '31-08-2015'
                }
            },
            {
                no: 9,
                name: 'Wrzesień 2015',
                done: true,
                plan: {
                    amount: 1000.00,
                    date: '30-09-2015'
                }
            },
            {
                no: 10,
                name: 'Październik 2015',
                done: true,
                plan: {
                    amount: 1000.00,
                    date: '31-10-2015'
                }
            },
            {
                no: 11,
                name: 'Listopad 2015',
                done: true,
                plan: {
                    amount: 1000.00,
                    date: '30-11-2015'
                }
            },
            {
                no: 12,
                name: 'Grudzień 2015',
                done: true,
                plan: {
                    amount: 1000.00,
                    date: '31-12-2015'
                }
            },
            {
                no: 13,
                name: 'Styczeń 2016',
                done: false,
                plan: {
                    amount: 1000.00,
                    date: '31-01-2016'
                }
            },
            {
                no: 14,
                name: 'Luty 2016',
                done: false,
                plan: {
                    amount: 1000.00,
                    date: '29-02-2016'
                }
            },
            {
                no: 15,
                name: 'Marzec 2016',
                done: false,
                plan: {
                    amount: 1000.00,
                    date: '31-03-2016'
                }
            },
            {
                no: 16,
                name: 'Kwiecień 2016',
                done: false,
                plan: {
                    amount: 1000.00,
                    date: '30-04-2016'
                }
            },
            {
                no: 17,
                name: 'Maj 2016',
                done: false,
                plan: {
                    amount: 1000.00,
                    date: '31-05-2016'
                }
            },
            {
                no: 18,
                name: 'Czerwiec 2016',
                done: false,
                plan: {
                    amount: 1000.00,
                    date: '30-06-2016'
                }
            },
            {
                no: 19,
                name: 'Lipeic 2016',
                done: false,
                plan: {
                    amount: 1000.00,
                    date: '31-07-2016'
                }
            },
            {
                no: 20,
                name: 'Sierpień 2016',
                done: false,
                plan: {
                    amount: 1000.00,
                    date: '31-08-2016'
                }
            },
            {
                no: 21,
                name: 'Wrzesień 2016',
                done: false,
                plan: {
                    amount: 1000.00,
                    date: '30-09-2016'
                }
            },
            {
                no: 22,
                name: 'Październik 2016',
                done: false,
                plan: {
                    amount: 1000.00,
                    date: '31-10-2016'
                }
            },
            {
                no: 23,
                name: 'Listopad 2016',
                done: true,
                plan: {
                    amount: 1000.00,
                    date: '30-11-2016'
                }
            },
            {
                no: 24,
                name: 'Grudzień 2016',
                done: true,
                plan: {
                    amount: 1000.00,
                    date: '31-12-2016'
                }
            }
        ]
    },
    internet = {
        id: 5,
        name: 'Internet',
        group: 'Play',
        type: 'bill',
        paymentList: [
            {
                no: 1,
                name: '10.08.2015 - 09.09.2015',
                done: true,
                plan: {
                    amount: 41.40,
                    date: '28-08-2015'
                },
                payment:  {
                    amount: 41.40,
                    date: '12-08-2015'
                }
            },
            {
                no: 2,
                name: '10.09.2015 - 09.10.2015',
                done: true,
                plan: {
                    amount: 34.98,
                    date: '28-09-2015'
                },
                payment:  {
                    amount: 34.98,
                    date: '12-09-2015'
                }
            },
            {
                no: 3,
                name: '10.10.2015 - 09.11.2015',
                done: true,
                plan: {
                    amount: 29.99,
                    date: '28-10-2015'
                },
                payment:  {
                    amount: 29.99,
                    date: '12-10-2015'
                }
            },
            {
                no: 4,
                name: '10.11.2015 - 09.12.2015',
                done: true,
                plan: {
                    amount: 29.99,
                    date: '28-11-2015'
                },
                payment:  {
                    amount: 29.99,
                    date: '12-11-2015'
                }
            },
            {
                no: 5,
                name: '10.12.2015 - 09.01.2016',
                done: true,
                plan: {
                    amount: 29.99,
                    date: '28-12-2015'
                },
                payment:  {
                    amount: 29.99,
                    date: '12-12-2015'
                }
            },
            {
                no: 6,
                name: '10.01.2016 - 09.02.2016',
                done: false,
                plan: {
                    amount: 29.99,
                    date: '28-01-2016'
                },
                payment:  {
                    amount: 0.00,
                    date: null
                }
            },
            {
                no: 7,
                name: '10.02.2016 - 09.03.2016',
                done: false,
                plan: {
                    amount: 29.99,
                    date: '28-02-2016'
                },
                payment:  {
                    amount: 0.00,
                    date: null
                }
            },
            {
                no: 8,
                name: '10.03.2016 - 09.04.2016',
                done: false,
                plan: {
                    amount: 49.99,
                    date: '28-03-2016'
                },
                payment:  {
                    amount: 0.00,
                    date: null
                }
            },
            {
                no: 9,
                name: '10.04.2016 - 09.05.2016',
                done: false,
                plan: {
                    amount: 49.99,
                    date: '28-04-2016'
                },
                payment:  {
                    amount: 0.00,
                    date: null
                }
            },
            {
                no: 10,
                name: '10.05.2016 - 09.06.2016',
                done: false,
                plan: {
                    amount: 49.99,
                    date: '28-05-2016'
                },
                payment:  {
                    amount: 0.00,
                    date: null
                }
            },
            {
                no: 11,
                name: '10.06.2016 - 09.07.2016',
                done: false,
                plan: {
                    amount: 49.99,
                    date: '28-06-2016'
                },
                payment:  {
                    amount: 0.00,
                    date: null
                }
            },
            {
                no: 12,
                name: '10.07.2016 - 09.08.2016',
                done: false,
                plan: {
                    amount: 49.99,
                    date: '28-07-2016'
                },
                payment:  {
                    amount: 0.00,
                    date: null
                }
            },
            {
                no: 13,
                name: '10.08.2016 - 09.09.2016',
                done: false,
                plan: {
                    amount: 49.99,
                    date: '28-08-2016'
                },
                payment:  {
                    amount: 0.00,
                    date: null
                }
            },
            {
                no: 14,
                name: '10.09.2016 - 09.10.2016',
                done: false,
                plan: {
                    amount: 49.99,
                    date: '28-09-2016'
                },
                payment:  {
                    amount: 0.00,
                    date: null
                }
            },
            {
                no: 15,
                name: '10.10.2016 - 09.11.2016',
                done: false,
                plan: {
                    amount: 49.99,
                    date: '28-10-2016'
                },
                payment:  {
                    amount: 0.00,
                    date: null
                }
            },
            {
                no: 16,
                name: '10.11.2016 - 09.12.2016',
                done: false,
                plan: {
                    amount: 49.99,
                    date: '28-11-2016'
                },
                payment:  {
                    amount: 0.00,
                    date: null
                }
            },
            {
                no: 17,
                name: '10.12.2016 - 09.01.2017',
                done: false,
                plan: {
                    amount: 49.99,
                    date: '28-12-2016'
                },
                payment:  {
                    amount: 0.00,
                    date: null
                }
            },
            {
                no: 18,
                name: '10.01.2017 - 09.02.2017',
                done: false,
                plan: {
                    amount: 49.99,
                    date: '28-01-2017'
                },
                payment:  {
                    amount: 0.00,
                    date: null
                }
            },
            {
                no: 19,
                name: '10.02.2017 - 09.03.2017',
                done: false,
                plan: {
                    amount: 49.99,
                    date: '28-02-2017'
                },
                payment:  {
                    amount: 0.00,
                    date: null
                }
            },
            {
                no: 20,
                name: '10.03.2017 - 09.04.2017',
                done: false,
                plan: {
                    amount: 49.99,
                    date: '28-03-2017'
                },
                payment:  {
                    amount: 0.00,
                    date: null
                }
            },
            {
                no: 21,
                name: '10.04.2017 - 09.05.2017',
                done: false,
                plan: {
                    amount: 49.99,
                    date: '28-04-2017'
                },
                payment:  {
                    amount: 0.00,
                    date: null
                }
            },
            {
                no: 22,
                name: '10.05.2017 - 09.06.2017',
                done: false,
                plan: {
                    amount: 49.99,
                    date: '28-05-2017'
                },
                payment:  {
                    amount: 0.00,
                    date: null
                }
            },
            {
                no: 23,
                name: '10.06.2017 - 09.07.2017',
                done: false,
                plan: {
                    amount: 49.99,
                    date: '28-06-2017'
                },
                payment:  {
                    amount: 0.00,
                    date: null
                }
            },
            {
                no: 24,
                name: '10.07.2017 - 09.08.2017',
                done: false,
                plan: {
                    amount: 49.99,
                    date: '28-07-2017'
                },
                payment:  {
                    amount: 0.00,
                    date: null
                }
            },
            {
                no: 25,
                name: '10.08.2017 - 09.09.2017',
                done: false,
                plan: {
                    amount: 49.99,
                    date: '28-08-2017'
                },
                payment:  {
                    amount: 0.00,
                    date: null
                }
            },
            {
                no: 26,
                name: '10.09.2017 - 09.10.2017',
                done: false,
                plan: {
                    amount: 49.99,
                    date: '28-09-2017'
                },
                payment:  {
                    amount: 0.00,
                    date: null
                }
            },
            {
                no: 27,
                name: '10.10.2017 - 09.11.2017',
                done: false,
                plan: {
                    amount: 49.99,
                    date: '28-10-2017'
                },
                payment:  {
                    amount: 0.00,
                    date: null
                }
            }
        ]
    },
    phoneAdam = {
        id: 6,
        name: 'Telefon - Adaś',
        group: 'Play',
        type: 'bill',
        paymentList: [
            {
                no: 1,
                name: '23.06.2015 - 09.07.2015',
                done: true,
                plan: {
                    amount: 33.05,
                    date: '28-06-2015'
                },
                payment:  {
                    amount: 33.05,
                    date: '12-06-2015'
                }
            },
            {
                no: 2,
                name: '10.07.2015 - 09.08.2015',
                done: true,
                plan: {
                    amount: 49.99,
                    date: '28-07-2015'
                },
                payment:  {
                    amount: 49.99,
                    date: '12-07-2015'
                }
            },
            {
                no: 3,
                name: '10.08.2015 - 09.09.2015',
                done: true,
                plan: {
                    amount: 41.77,
                    date: '28-08-2015'
                },
                payment:  {
                    amount: 41.77,
                    date: '12-08-2015'
                }
            },
            {
                no: 4,
                name: '10.09.2015 - 09.10.2015',
                done: true,
                plan: {
                    amount: 34.99,
                    date: '28-09-2015'
                },
                payment:  {
                    amount: 34.99,
                    date: '12-09-2015'
                }
            },
            {
                no: 5,
                name: '10.10.2015 - 09.11.2015',
                done: true,
                plan: {
                    amount: 49.99,
                    date: '28-10-2015'
                },
                payment:  {
                    amount: 49.99,
                    date: '12-10-2015'
                }
            },
            {
                no: 6,
                name: '10.11.2015 - 09.12.2015',
                done: true,
                plan: {
                    amount: 49.99,
                    date: '28-11-2015'
                },
                payment:  {
                    amount: 49.99,
                    date: '12-11-2015'
                }
            },
            {
                no: 7,
                name: '10.12.2015 - 09.01.2016',
                done: true,
                plan: {
                    amount: 49.99,
                    date: '28-12-2015'
                },
                payment:  {
                    amount: 49.99,
                    date: '12-12-2015'
                }
            },
            {
                no: 8,
                name: '10.01.2016 - 09.02.2016',
                done: false,
                plan: {
                    amount: 49.99,
                    date: '28-01-2016'
                },
                payment:  {
                    amount: 0.00,
                    date: null
                }
            },
            {
                no: 9,
                name: '10.02.2016 - 09.03.2016',
                done: false,
                plan: {
                    amount: 49.99,
                    date: '28-02-2016'
                },
                payment:  {
                    amount: 0.00,
                    date: null
                }
            },
            {
                no: 10,
                name: '10.03.2016 - 09.04.2016',
                done: false,
                plan: {
                    amount: 49.99,
                    date: '28-03-2016'
                },
                payment:  {
                    amount: 0.00,
                    date: null
                }
            },
            {
                no: 11,
                name: '10.04.2016 - 09.05.2016',
                done: false,
                plan: {
                    amount: 49.99,
                    date: '28-04-2016'
                },
                payment:  {
                    amount: 0.00,
                    date: null
                }
            },
            {
                no: 12,
                name: '10.05.2016 - 09.06.2016',
                done: false,
                plan: {
                    amount: 49.99,
                    date: '28-05-2016'
                },
                payment:  {
                    amount: 0.00,
                    date: null
                }
            },
            {
                no: 13,
                name: '10.06.2016 - 09.07.2016',
                done: false,
                plan: {
                    amount: 49.99,
                    date: '28-06-2016'
                },
                payment:  {
                    amount: 0.00,
                    date: null
                }
            },
            {
                no: 14,
                name: '10.07.2016 - 09.08.2016',
                done: false,
                plan: {
                    amount: 49.99,
                    date: '28-07-2016'
                },
                payment:  {
                    amount: 0.00,
                    date: null
                }
            },
            {
                no: 15,
                name: '10.08.2016 - 09.09.2016',
                done: false,
                plan: {
                    amount: 49.99,
                    date: '28-08-2016'
                },
                payment:  {
                    amount: 0.00,
                    date: null
                }
            },
            {
                no: 16,
                name: '10.09.2016 - 09.10.2016',
                done: false,
                plan: {
                    amount: 49.99,
                    date: '28-09-2016'
                },
                payment:  {
                    amount: 0.00,
                    date: null
                }
            },
            {
                no: 17,
                name: '10.10.2016 - 09.11.2016',
                done: false,
                plan: {
                    amount: 49.99,
                    date: '28-10-2016'
                },
                payment:  {
                    amount: 0.00,
                    date: null
                }
            },
            {
                no: 18,
                name: '10.11.2016 - 09.12.2016',
                done: false,
                plan: {
                    amount: 49.99,
                    date: '28-11-2016'
                },
                payment:  {
                    amount: 0.00,
                    date: null
                }
            },
            {
                no: 19,
                name: '10.12.2016 - 09.01.2017',
                done: false,
                plan: {
                    amount: 49.99,
                    date: '28-12-2016'
                },
                payment:  {
                    amount: 0.00,
                    date: null
                }
            },
            {
                no: 20,
                name: '10.01.2017 - 09.02.2017',
                done: false,
                plan: {
                    amount: 49.99,
                    date: '28-02-2017'
                },
                payment:  {
                    amount: 0.00,
                    date: null
                }
            },
            {
                no: 21,
                name: '10.02.2017 - 09.03.2017',
                done: false,
                plan: {
                    amount: 49.99,
                    date: '28-03-2017'
                },
                payment:  {
                    amount: 0.00,
                    date: null
                }
            },
            {
                no: 22,
                name: '10.03.2017 - 09.04.2017',
                done: false,
                plan: {
                    amount: 49.99,
                    date: '28-03-2017'
                },
                payment:  {
                    amount: 0.00,
                    date: null
                }
            },
            {
                no: 23,
                name: '10.04.2017 - 09.05.2017',
                done: false,
                plan: {
                    amount: 49.99,
                    date: '28-03-2017'
                },
                payment:  {
                    amount: 0.00,
                    date: null
                }
            },
            {
                no: 24,
                name: '10.05.2017 - 09.06.2017',
                done: false,
                plan: {
                    amount: 49.99,
                    date: '28-05-2017'
                },
                payment:  {
                    amount: 0.00,
                    date: null
                }
            },
            {
                no: 25,
                name: '10.06.2017 - 09.07.2017',
                done: false,
                plan: {
                    amount: 49.99,
                    date: '28-06-2017'
                },
                payment:  {
                    amount: 0.00,
                    date: null
                }
            },
            {
                no: 26,
                name: '10.07.2017 - 09.08.2017',
                done: false,
                plan: {
                    amount: 49.99,
                    date: '28-07-2017'
                },
                payment:  {
                    amount: 0.00,
                    date: null
                }
            },
            {
                no: 27,
                name: '10.08.2017 - 09.09.2017',
                done: false,
                plan: {
                    amount: 49.99,
                    date: '28-08-2017'
                },
                payment:  {
                    amount: 0.00,
                    date: null
                }
            }
        ]
    },
    phoneAnna = {
        id: 7,
        name: 'Telefon - Ania',
        group: 'Play',
        type: 'bill',
        paymentList: []
    },
    fuel = {
        id: 8,
        name: 'Paliwo',
        group: 'Samochód',
        type: 'tank',
        paymentList: [
            {
                no: 1,
                name: 'Kupno - pusty bak',
                done: true,
                plan: {
                    amount: 300.00,
                    date: '09-01-2015'
                },
                payment:  [
                    {
                        amount: 277.91,
                        date: '09-01-2015',
                        literPrice: 4.51,
                        mileage: 181703
                    }
                ]
            },
            {
                no: 2,
                name: 'Styczeń 2015',
                done: true,
                plan: {
                    amount: 800.00,
                    date: '31-01-2015'
                },
                payment:  [
                    {
                        amount: 216.51,
                        date: '23-01-2015',
                        literPrice: 4.49,
                        mileage: 182212
                    },
                    {
                        amount: 180.89,
                        date: '01-02-2015',
                        literPrice: 4.45,
                        mileage: 182676
                    }
                ]
            },
            {
                no: 3,
                name: 'Luty 2015',
                done: true,
                plan: {
                    amount: 800.00,
                    date: '28-02-2015'
                },
                payment:  [
                    {
                        amount: 200.02,
                        date: '14-02-2015',
                        literPrice: 4.55,
                        mileage: 183182
                    },
                    {
                        amount: 239.20,
                        date: '27-02-2015',
                        literPrice: 4.65,
                        mileage: 183781
                    }
                ]
            },
            {
                no: 4,
                name: 'Marzec 2015',
                done: true,
                plan: {
                    amount: 800.00,
                    date: '31-03-2015'
                },
                payment:  [
                    {
                        amount: 274.92,
                        date: '14-03-2015',
                        literPrice: 4.83,
                        mileage: 184428
                    },
                    {
                        amount: 203.38,
                        date: '20-03-2015',
                        literPrice: 4.84,
                        mileage: 184918
                    },
                    {
                        amount: 127.27,
                        date: '28-03-2015',
                        literPrice: 4.79,
                        mileage: 185211
                    }
                ]
            },
            {
                no: 5,
                name: 'Kwiecień 2015',
                done: true,
                plan: {
                    amount: 800.00,
                    date: '30-04-2015'
                },
                payment:  [
                    {
                        amount: 212.04,
                        date: '03-04-2015',
                        literPrice: 4.87,
                        mileage: 185724
                    },
                    {
                        amount: 227.09,
                        date: '12-04-2015',
                        literPrice: 4.84,
                        mileage: 186310
                    },
                    {
                        amount: 199.17,
                        date: '25-04-2015',
                        literPrice: 4.89,
                        mileage: 186822
                    }
                ]
            },
            {
                no: 6,
                name: 'Maj 2015',
                done: true,
                plan: {
                    amount: 800.00,
                    date: '31-05-2015'
                },
                payment:  [
                    {
                        amount: 298.28,
                        date: '09-05-2015',
                        literPrice: 4.94,
                        mileage: 187490
                    },
                    {
                        amount: 253.82,
                        date: '24-05-2015',
                        literPrice: 4.92,
                        mileage: 188134
                    },
                    {
                        amount: 299.34,
                        date: '03-06-2015',
                        literPrice: 5.09,
                        mileage: 188877
                    }
                ]
            },
            {
                no: 7,
                name: 'Czerwiec 2015',
                done: true,
                plan: {
                    amount: 800.00,
                    date: '30-06-2015'
                },
                payment:  [
                    {
                        amount: 257.71,
                        date: '13-06-2015',
                        literPrice: 5.09,
                        mileage: 189405
                    },
                    {
                        amount: 340.63,
                        date: '26-06-2015',
                        literPrice: 4.98,
                        mileage: 190232
                    }
                ]
            },
            {
                no: 8,
                name: 'Lipiec 2015',
                done: true,
                plan: {
                    amount: 800.00,
                    date: '31-07-2015'
                },
                payment:  [
                    {
                        amount: 255.24,
                        date: '10-07-2015',
                        literPrice: 5.17,
                        mileage: 190808
                    },
                    {
                        amount: 193.37,
                        date: '18-07-2015',
                        literPrice: 5.07,
                        mileage: 191231
                    },
                    {
                        amount: 294.24,
                        date: '01-08-2015',
                        literPrice: 5.04,
                        mileage: 191879
                    }
                ]
            },
            {
                no: 9,
                name: 'Sierpień 2015',
                done: true,
                plan: {
                    amount: 800.00,
                    date: '31-08-2015'
                },
                payment:  [
                    {
                        amount: 299.75,
                        date: '11-08-2015',
                        literPrice: 4.99,
                        mileage: 192552
                    },
                    {
                        amount: 233.57,
                        date: '20-08-2015',
                        literPrice: 4.76,
                        mileage: 193093
                    },
                    {
                        amount: 279.84,
                        date: '28-08-2015',
                        literPrice: 4.76,
                        mileage: 193836
                    }
                ]
            },
            {
                no: 10,
                name: 'Wrzesień 2015',
                done: true,
                plan: {
                    amount: 800.00,
                    date: '30-09-2015'
                },
                payment:  [
                    {
                        amount: 184.00,
                        date: '05-09-2015',
                        literPrice: 4.65,
                        mileage: 194310
                    },
                    {
                        amount: 221.07,
                        date: '15-09-2015',
                        literPrice: 4.56,
                        mileage: 194823
                    },
                    {
                        amount: 244.98,
                        date: '02-10-2015',
                        literPrice: 4.31,
                        mileage: 195445
                    }
                ]
            },
            {
                no: 11,
                name: 'Paxdziernik 2015',
                done: true,
                plan: {
                    amount: 800.00,
                    date: '31-10-2015'
                },
                payment:  [
                    {
                        amount: 216.54,
                        date: '15-10-2015',
                        literPrice: 4.24,
                        mileage: 195976
                    },
                    {
                        amount: 212.18,
                        date: '25-10-2015',
                        literPrice: 4.22,
                        mileage: 196545
                    },
                    {
                        amount: 249.35,
                        date: '09-11-2015',
                        literPrice: 4.39,
                        mileage: 197126
                    }
                ]
            },
            {
                no: 12,
                name: 'Listopad 2015',
                done: true,
                plan: {
                    amount: 800.00,
                    date: '30-11-2015'
                },
                payment:  [
                    {
                        amount: 228.37,
                        date: '18-11-2015',
                        literPrice: 4.34,
                        mileage: 197720
                    },
                    {
                        amount: 224.59,
                        date: '02-12-2015',
                        literPrice: 4.31,
                        mileage: 198278
                    }
                ]
            },
            {
                no: 13,
                name: 'Grudzień 2015',
                done: false,
                plan: {
                    amount: 800.00,
                    date: '31-12-2015'
                },
                payment:  [
                    {
                        amount: 222.29,
                        date: '17-12-2015',
                        literPrice: 4.18,
                        mileage: 198853
                    },
                    {
                        amount: 0.00,
                        date: '',
                        literPrice: 0.00,
                        mileage: 0
                    }
                ]
            },
            {
                no: 14,
                name: 'Styczeń 2016',
                done: false,
                plan: {
                    amount: 800.00,
                    date: '31-01-2016'
                },
                payment:  [
                ]
            },
            {
                no: 15,
                name: 'Luty 2016',
                done: false,
                plan: {
                    amount: 800.00,
                    date: '29-02-2016'
                },
                payment:  [
                ]
            },
            {
                no: 16,
                name: 'Marzec 2016',
                done: false,
                plan: {
                    amount: 800.00,
                    date: '31-03-2016'
                },
                payment:  [
                ]
            },
            {
                no: 17,
                name: 'Kwiecień 2016',
                done: false,
                plan: {
                    amount: 800.00,
                    date: '30-04-2016'
                },
                payment:  [
                ]
            },
            {
                no: 18,
                name: 'Maj 2016',
                done: false,
                plan: {
                    amount: 800.00,
                    date: '31-05-2016'
                },
                payment:  [
                ]
            },
            {
                no: 19,
                name: 'Czerwiec 2016',
                done: false,
                plan: {
                    amount: 800.00,
                    date: '30-06-2016'
                },
                payment:  [
                ]
            },
            {
                no: 20,
                name: 'Lipiec 2016',
                done: false,
                plan: {
                    amount: 800.00,
                    date: '31-07-2016'
                },
                payment:  [
                ]
            },
            {
                no: 21,
                name: 'Sierpień 2016',
                done: false,
                plan: {
                    amount: 800.00,
                    date: '31-08-2016'
                },
                payment:  [
                ]
            },
            {
                no: 22,
                name: 'Wrzesień 2016',
                done: false,
                plan: {
                    amount: 800.00,
                    date: '30-09-2016'
                },
                payment:  [
                ]
            },
            {
                no: 23,
                name: 'Październik 2016',
                done: false,
                plan: {
                    amount: 800.00,
                    date: '31-10-2016'
                },
                payment:  [
                ]
            },
            {
                no: 24,
                name: 'Listopad 2016',
                done: false,
                plan: {
                    amount: 800.00,
                    date: '30-11-2016'
                },
                payment:  [
                ]
            },
            {
                no: 25,
                name: 'Grudzień 2016',
                done: false,
                plan: {
                    amount: 800.00,
                    date: '31-12-2016'
                },
                payment:  [
                ]
            }
        ]
    },
    equipmentEuro = {
        id: 9,
        name: 'Sprzęt - Euro',
        group: 'Raty',
        type: 'credit',
        amount: 4432.00,
        paymentList: [
            {
                no: 1,
                name: 'Rata 1',
                remains: 4343.36,
                done: true,
                plan: {
                    amount: 88.64,
                    date: '01-06-2015'
                },
                payment:  {
                    amount: 88.64,
                    date: '28-05-2015'
                }
            },
            {
                no: 2,
                name: 'Rata 2',
                remains: 4254.72,
                done: true,
                plan: {
                    amount: 88.64,
                    date: '01-07-2015'
                },
                payment:  {
                    amount: 88.64,
                    date: '29-06-2015'
                }
            },
            {
                no: 3,
                name: 'Rata 3',
                remains: 4166.08,
                done: true,
                plan: {
                    amount: 88.64,
                    date: '01-08-2015'
                },
                payment:  {
                    amount: 88.64,
                    date: '29-07-2015'
                }
            },
            {
                no: 4,
                name: 'Rata 4',
                remains: 4077.44,
                done: true,
                plan: {
                    amount: 88.64,
                    date: '01-09-2015'
                },
                payment:  {
                    amount: 88.64,
                    date: '30-08-2015'
                }
            },
            {
                no: 5,
                name: 'Rata 5',
                remains: 3988.80,
                done: true,
                plan: {
                    amount: 88.64,
                    date: '01-10-2015'
                },
                payment:  {
                    amount: 88.64,
                    date: '29-09-2015'
                }
            },
            {
                no: 6,
                name: 'Rata 6',
                remains: 3900.16,
                done: true,
                plan: {
                    amount: 88.64,
                    date: '01-11-2015'
                },
                payment:  {
                    amount: 88.64,
                    date: '28-10-2015'
                }
            },
            {
                no: 7,
                name: 'Rata 7',
                remains: 3811.52,
                done: true,
                plan: {
                    amount: 88.64,
                    date: '01-12-2015'
                },
                payment:  {
                    amount: 88.64,
                    date: '27-11-2015'
                }
            },
            {
                no: 8,
                name: 'Rata 8',
                remains: 3722.88,
                done: true,
                plan: {
                    amount: 88.64,
                    date: '01-01-2016'
                },
                payment:  {
                    amount: 88.64,
                    date: '28-12-2015'
                }
            },
            {
                no: 9,
                name: 'Rata 9',
                remains: 3634.24,
                done: false,
                plan: {
                    amount: 88.64,
                    date: '01-02-2016'
                },
                payment:  {
                    amount: 0.00,
                    date: ''
                }
            },
            {
                no: 10,
                name: 'Rata 10',
                remains: 3545.60,
                done: false,
                plan: {
                    amount: 88.64,
                    date: '01-03-2016'
                },
                payment:  {
                    amount: 0.00,
                    date: ''
                }
            },
            {
                no: 11,
                name: 'Rata 11',
                remains: 3456.96,
                done: false,
                plan: {
                    amount: 88.64,
                    date: '01-04-2016'
                },
                payment:  {
                    amount: 0.00,
                    date: ''
                }
            },
            {
                no: 12,
                name: 'Rata 12',
                remains: 3368.32,
                done: false,
                plan: {
                    amount: 88.64,
                    date: '01-05-2016'
                },
                payment:  {
                    amount: 0.00,
                    date: ''
                }
            },
            {
                no: 13,
                name: 'Rata 13',
                remains: 3279.68,
                done: false,
                plan: {
                    amount: 88.64,
                    date: '01-06-2016'
                },
                payment:  {
                    amount: 0.00,
                    date: ''
                }
            },
            {
                no: 14,
                name: 'Rata 14',
                remains: 3191.04,
                done: false,
                plan: {
                    amount: 88.64,
                    date: '01-07-2016'
                },
                payment:  {
                    amount: 0.00,
                    date: ''
                }
            },
            {
                no: 15,
                name: 'Rata 15',
                remains: 3102.40,
                done: false,
                plan: {
                    amount: 88.64,
                    date: '01-08-2016'
                },
                payment:  {
                    amount: 0.00,
                    date: ''
                }
            },
            {
                no: 16,
                name: 'Rata 16',
                remains: 3013.76,
                done: false,
                plan: {
                    amount: 88.64,
                    date: '01-09-2016'
                },
                payment:  {
                    amount: 0.00,
                    date: ''
                }
            },
            {
                no: 17,
                name: 'Rata 17',
                remains: 2925.12,
                done: false,
                plan: {
                    amount: 88.64,
                    date: '01-10-2016'
                },
                payment:  {
                    amount: 0.00,
                    date: ''
                }
            },
            {
                no: 18,
                name: 'Rata 18',
                remains: 2836.48,
                done: false,
                plan: {
                    amount: 88.64,
                    date: '01-11-2016'
                },
                payment:  {
                    amount: 0.00,
                    date: ''
                }
            },
            {
                no: 19,
                name: 'Rata 19',
                remains: 2747.84,
                done: false,
                plan: {
                    amount: 88.64,
                    date: '01-12-2016'
                },
                payment:  {
                    amount: 0.00,
                    date: ''
                }
            },
            {
                no: 20,
                name: 'Rata 20',
                remains: 2659.20,
                done: false,
                plan: {
                    amount: 88.64,
                    date: '01-01-2017'
                },
                payment:  {
                    amount: 0.00,
                    date: ''
                }
            },
            {
                no: 21,
                name: 'Rata 21',
                remains: 2570.56,
                done: false,
                plan: {
                    amount: 88.64,
                    date: '01-02-2017'
                },
                payment:  {
                    amount: 0.00,
                    date: ''
                }
            },
            {
                no: 22,
                name: 'Rata 22',
                remains: 2481.92,
                done: false,
                plan: {
                    amount: 88.64,
                    date: '01-03-2017'
                },
                payment:  {
                    amount: 0.00,
                    date: ''
                }
            },
            {
                no: 23,
                name: 'Rata 23',
                remains: 2393.28,
                done: false,
                plan: {
                    amount: 88.64,
                    date: '01-04-2017'
                },
                payment:  {
                    amount: 0.00,
                    date: ''
                }
            },
            {
                no: 24,
                name: 'Rata 24',
                remains: 2304.64,
                done: false,
                plan: {
                    amount: 88.64,
                    date: '01-05-2017'
                },
                payment:  {
                    amount: 0.00,
                    date: ''
                }
            },
            {
                no: 25,
                name: 'Rata 25',
                remains: 2216.00,
                done: false,
                plan: {
                    amount: 88.64,
                    date: '01-06-2017'
                },
                payment:  {
                    amount: 0.00,
                    date: ''
                }
            },
            {
                no: 26,
                name: 'Rata 26',
                remains: 2127.36,
                done: false,
                plan: {
                    amount: 88.64,
                    date: '01-07-2017'
                },
                payment:  {
                    amount: 0.00,
                    date: ''
                }
            },
            {
                no: 27,
                name: 'Rata 27',
                remains: 2038.72,
                done: false,
                plan: {
                    amount: 88.64,
                    date: '01-08-2017'
                },
                payment:  {
                    amount: 0.00,
                    date: ''
                }
            },
            {
                no: 28,
                name: 'Rata 28',
                remains: 1950.08,
                done: false,
                plan: {
                    amount: 88.64,
                    date: '01-09-2017'
                },
                payment:  {
                    amount: 0.00,
                    date: ''
                }
            },
            {
                no: 29,
                name: 'Rata 29',
                remains: 1861.44,
                done: false,
                plan: {
                    amount: 88.64,
                    date: '01-10-2017'
                },
                payment:  {
                    amount: 0.00,
                    date: ''
                }
            },
            {
                no: 30,
                name: 'Rata 30',
                remains: 1772.80,
                done: false,
                plan: {
                    amount: 88.64,
                    date: '01-11-2017'
                },
                payment:  {
                    amount: 0.00,
                    date: ''
                }
            },
            {
                no: 31,
                name: 'Rata 31',
                remains: 1684.16,
                done: false,
                plan: {
                    amount: 88.64,
                    date: '01-12-2017'
                },
                payment:  {
                    amount: 0.00,
                    date: ''
                }
            },
            {
                no: 32,
                name: 'Rata 32',
                remains: 1595.52,
                done: false,
                plan: {
                    amount: 88.64,
                    date: '01-01-2018'
                },
                payment:  {
                    amount: 0.00,
                    date: ''
                }
            },
            {
                no: 33,
                name: 'Rata 33',
                remains: 1506.88,
                done: false,
                plan: {
                    amount: 88.64,
                    date: '01-02-2018'
                },
                payment:  {
                    amount: 0.00,
                    date: ''
                }
            },
            {
                no: 34,
                name: 'Rata 34',
                remains: 1418.24,
                done: false,
                plan: {
                    amount: 88.64,
                    date: '01-03-2018'
                },
                payment:  {
                    amount: 0.00,
                    date: ''
                }
            },
            {
                no: 35,
                name: 'Rata 35',
                remains: 1329.60,
                done: false,
                plan: {
                    amount: 88.64,
                    date: '01-04-2018'
                },
                payment:  {
                    amount: 0.00,
                    date: ''
                }
            },
            {
                no: 36,
                name: 'Rata 36',
                remains: 1240.96,
                done: false,
                plan: {
                    amount: 88.64,
                    date: '01-05-2018'
                },
                payment:  {
                    amount: 0.00,
                    date: ''
                }
            },
            {
                no: 37,
                name: 'Rata 37',
                remains: 1152.32,
                done: false,
                plan: {
                    amount: 88.64,
                    date: '01-06-2018'
                },
                payment:  {
                    amount: 0.00,
                    date: ''
                }
            },
            {
                no: 38,
                name: 'Rata 38',
                remains: 1063.68,
                done: false,
                plan: {
                    amount: 88.64,
                    date: '01-07-2018'
                },
                payment:  {
                    amount: 0.00,
                    date: ''
                }
            },
            {
                no: 39,
                name: 'Rata 39',
                remains: 975.04,
                done: false,
                plan: {
                    amount: 88.64,
                    date: '01-08-2018'
                },
                payment:  {
                    amount: 0.00,
                    date: ''
                }
            },
            {
                no: 40,
                name: 'Rata 40',
                remains: 886.40,
                done: false,
                plan: {
                    amount: 88.64,
                    date: '01-09-2018'
                },
                payment:  {
                    amount: 0.00,
                    date: ''
                }
            },
            {
                no: 41,
                name: 'Rata 41',
                remains: 797.76,
                done: false,
                plan: {
                    amount: 88.64,
                    date: '01-10-2018'
                },
                payment:  {
                    amount: 0.00,
                    date: ''
                }
            },
            {
                no: 42,
                name: 'Rata 42',
                remains: 709.12,
                done: false,
                plan: {
                    amount: 88.64,
                    date: '01-11-2018'
                },
                payment:  {
                    amount: 0.00,
                    date: ''
                }
            },
            {
                no: 43,
                name: 'Rata 43',
                remains: 620.48,
                done: false,
                plan: {
                    amount: 88.64,
                    date: '01-12-2018'
                },
                payment:  {
                    amount: 0.00,
                    date: ''
                }
            },
            {
                no: 44,
                name: 'Rata 44',
                remains: 531.84,
                done: false,
                plan: {
                    amount: 88.64,
                    date: '01-01-2019'
                },
                payment:  {
                    amount: 0.00,
                    date: ''
                }
            },
            {
                no: 45,
                name: 'Rata 45',
                remains: 443.20,
                done: false,
                plan: {
                    amount: 88.64,
                    date: '01-02-2019'
                },
                payment:  {
                    amount: 0.00,
                    date: ''
                }
            },
            {
                no: 46,
                name: 'Rata 46',
                remains: 354.56,
                done: false,
                plan: {
                    amount: 88.64,
                    date: '01-03-2019'
                },
                payment:  {
                    amount: 0.00,
                    date: ''
                }
            },
            {
                no: 47,
                name: 'Rata 47',
                remains: 265.92,
                done: false,
                plan: {
                    amount: 88.64,
                    date: '01-04-2019'
                },
                payment:  {
                    amount: 0.00,
                    date: ''
                }
            },
            {
                no: 48,
                name: 'Rata 48',
                remains: 177.28,
                done: false,
                plan: {
                    amount: 88.64,
                    date: '01-05-2019'
                },
                payment:  {
                    amount: 0.00,
                    date: ''
                }
            },
            {
                no: 49,
                name: 'Rata 49',
                remains: 88.64,
                done: false,
                plan: {
                    amount: 88.64,
                    date: '01-06-2019'
                },
                payment:  {
                    amount: 0.00,
                    date: ''
                }
            },
            {
                no: 50,
                name: 'Rata 50',
                remains: 0.00,
                done: false,
                plan: {
                    amount: 88.64,
                    date: '01-07-2019'
                },
                payment:  {
                    amount: 0.00,
                    date: ''
                }
            }
        ]
    },
    equipmentNeonet = {
        id: 10,
        name: 'Sprzęt - Neonet',
        group: 'Kredyt',
        type: 'credit',
        amount: 3768.00,
        paymentList: [
            {
                no: 1,
                name: 'Rata 1',
                remains: 3642.40,
                done: true,
                plan: {
                    amount: 125.60,
                    date: '04-06-2015'
                },
                payment:  {
                    amount: 125.60,
                    date: '28-05-2015'
                }
            },
            {
                no: 2,
                name: 'Rata 2',
                remains: 3516.80,
                done: true,
                plan: {
                    amount: 125.60,
                    date: '04-07-2015'
                },
                payment:  {
                    amount: 125.60,
                    date: '29-06-2015'
                }
            },
            {
                no: 3,
                name: 'Rata 3',
                remains: 3391.20,
                done: true,
                plan: {
                    amount: 125.60,
                    date: '04-08-2015'
                },
                payment:  {
                    amount: 125.60,
                    date: '29-07-2015'
                }
            },
            {
                no: 4,
                name: 'Rata 4',
                remains: 3265.60,
                done: true,
                plan: {
                    amount: 125.60,
                    date: '04-09-2015'
                },
                payment:  {
                    amount: 125.60,
                    date: '30-08-2015'
                }
            },
            {
                no: 5,
                name: 'Rata 5',
                remains: 3140.00,
                done: true,
                plan: {
                    amount: 125.60,
                    date: '04-10-2015'
                },
                payment:  {
                    amount: 125.60,
                    date: '29-09-2015'
                }
            },
            {
                no: 6,
                name: 'Rata 6',
                remains: 3014.40,
                done: true,
                plan: {
                    amount: 125.60,
                    date: '04-11-2015'
                },
                payment:  {
                    amount: 125.60,
                    date: '28-10-2015'
                }
            },
            {
                no: 7,
                name: 'Rata 7',
                remains: 2888.80,
                done: true,
                plan: {
                    amount: 125.60,
                    date: '04-12-2015'
                },
                payment:  {
                    amount: 125.60,
                    date: '27-11-2015'
                }
            },
            {
                no: 8,
                name: 'Rata 8',
                remains: 2763.20,
                done: true,
                plan: {
                    amount: 125.60,
                    date: '04-01-2016'
                },
                payment:  {
                    amount: 125.60,
                    date: '28-12-2015'
                }
            },
            {
                no: 9,
                name: 'Rata 9',
                remains: 2637.60,
                done: false,
                plan: {
                    amount: 125.60,
                    date: '04-02-2016'
                },
                payment:  {
                    amount: 0.00,
                    date: ''
                }
            },
            {
                no: 10,
                name: 'Rata 10',
                remains: 2512.00,
                done: false,
                plan: {
                    amount: 125.60,
                    date: '04-03-2016'
                },
                payment:  {
                    amount: 0.00,
                    date: ''
                }
            },
            {
                no: 11,
                name: 'Rata 11',
                remains: 2386.40,
                done: false,
                plan: {
                    amount: 125.60,
                    date: '04-04-2016'
                },
                payment:  {
                    amount: 0.00,
                    date: ''
                }
            },
            {
                no: 12,
                name: 'Rata 12',
                remains: 2260.80,
                done: false,
                plan: {
                    amount: 125.60,
                    date: '04-05-2016'
                },
                payment:  {
                    amount: 0.00,
                    date: ''
                }
            },
            {
                no: 13,
                name: 'Rata 13',
                remains: 2135.20,
                done: false,
                plan: {
                    amount: 125.60,
                    date: '04-06-2016'
                },
                payment:  {
                    amount: 0.00,
                    date: ''
                }
            },
            {
                no: 14,
                name: 'Rata 14',
                remains: 2009.60,
                done: false,
                plan: {
                    amount: 125.60,
                    date: '04-07-2016'
                },
                payment:  {
                    amount: 0.00,
                    date: ''
                }
            },
            {
                no: 15,
                name: 'Rata 15',
                remains: 1884.00,
                done: false,
                plan: {
                    amount: 125.60,
                    date: '04-08-2016'
                },
                payment:  {
                    amount: 0.00,
                    date: ''
                }
            },
            {
                no: 16,
                name: 'Rata 16',
                remains: 1758.40,
                done: false,
                plan: {
                    amount: 125.60,
                    date: '04-09-2016'
                },
                payment:  {
                    amount: 0.00,
                    date: ''
                }
            },
            {
                no: 17,
                name: 'Rata 17',
                remains: 1632.80,
                done: false,
                plan: {
                    amount: 125.60,
                    date: '04-10-2016'
                },
                payment:  {
                    amount: 0.00,
                    date: ''
                }
            },
            {
                no: 18,
                name: 'Rata 18',
                remains: 1507.20,
                done: false,
                plan: {
                    amount: 125.60,
                    date: '04-11-2016'
                },
                payment:  {
                    amount: 0.00,
                    date: ''
                }
            },
            {
                no: 19,
                name: 'Rata 19',
                remains: 1381.60,
                done: false,
                plan: {
                    amount: 125.60,
                    date: '04-12-2016'
                },
                payment:  {
                    amount: 0.00,
                    date: ''
                }
            },
            {
                no: 20,
                name: 'Rata 20',
                remains: 1256.00,
                done: false,
                plan: {
                    amount: 125.60,
                    date: '04-01-2017'
                },
                payment:  {
                    amount: 0.00,
                    date: ''
                }
            },
            {
                no: 21,
                name: 'Rata 21',
                remains: 1130.40,
                done: false,
                plan: {
                    amount: 125.60,
                    date: '04-02-2017'
                },
                payment:  {
                    amount: 0.00,
                    date: ''
                }
            },
            {
                no: 22,
                name: 'Rata 22',
                remains: 1004.80,
                done: false,
                plan: {
                    amount: 125.60,
                    date: '04-03-2017'
                },
                payment:  {
                    amount: 0.00,
                    date: ''
                }
            },
            {
                no: 23,
                name: 'Rata 23',
                remains: 879.20,
                done: false,
                plan: {
                    amount: 125.60,
                    date: '04-04-2017'
                },
                payment:  {
                    amount: 0.00,
                    date: ''
                }
            },
            {
                no: 24,
                name: 'Rata 24',
                remains: 753.60,
                done: false,
                plan: {
                    amount: 125.60,
                    date: '04-05-2017'
                },
                payment:  {
                    amount: 0.00,
                    date: ''
                }
            },
            {
                no: 25,
                name: 'Rata 25',
                remains: 628.00,
                done: false,
                plan: {
                    amount: 125.60,
                    date: '04-06-2017'
                },
                payment:  {
                    amount: 0.00,
                    date: ''
                }
            },
            {
                no: 26,
                name: 'Rata 26',
                remains: 502.40,
                done: false,
                plan: {
                    amount: 125.60,
                    date: '04-07-2017'
                },
                payment:  {
                    amount: 0.00,
                    date: ''
                }
            },
            {
                no: 27,
                name: 'Rata 27',
                remains: 376.80,
                done: false,
                plan: {
                    amount: 125.60,
                    date: '04-08-2017'
                },
                payment:  {
                    amount: 0.00,
                    date: ''
                }
            },
            {
                no: 28,
                name: 'Rata 28',
                remains: 251.20,
                done: false,
                plan: {
                    amount: 125.60,
                    date: '04-09-2017'
                },
                payment:  {
                    amount: 0.00,
                    date: ''
                }
            },
            {
                no: 29,
                name: 'Rata 29',
                remains: 125.60,
                done: false,
                plan: {
                    amount: 125.60,
                    date: '04-10-2017'
                },
                payment:  {
                    amount: 0.00,
                    date: ''
                }
            },
            {
                no: 30,
                name: 'Rata 30',
                remains: 0.00,
                done: false,
                plan: {
                    amount: 125.60,
                    date: '04-11-2017'
                },
                payment:  {
                    amount: 0.00,
                    date: ''
                }
            }
        ]
    },
    studentCredit = {
        id: 11,
        name: 'Kredyt studencki',
        group: 'Kredyt',
        type: 'credit',
        amount: 18000,
        paymentList: [
            {
                no: 1,
                name: 'Rata 1',
                remains: 17700,
                done: true,
                plan: {
                    amount: 300.00,
                    date: '02-02-2015'
                },
                payment:  {
                    amount: 300.00,
                    date: '28-01-2015'
                }
            },
            {
                no: 2,
                name: 'Rata 2',
                remains: 17400,
                done: true,
                plan: {
                    amount: 323.69,
                    date: '02-03-2015'
                },
                payment:  {
                    amount: 323.73,
                    date: '26-02-2015'
                }
            },
            {
                no: 3,
                name: 'Rata 3',
                remains: 17100,
                done: true,
                plan: {
                    amount: 319.25,
                    date: '01-04-2015'
                },
                payment:  {
                    amount: 319.30,
                    date: '27-03-2015'
                }
            },
            {
                no: 4,
                name: 'Rata 4',
                remains: 16800,
                done: true,
                plan: {
                    amount: 330.23,
                    date: '04-05-2015'
                },
                payment:  {
                    amount: 330.28,
                    date: '28-04-2015'
                }
            },
            {
                no: 5,
                name: 'Rata 5',
                remains: 16500,
                done: true,
                plan: {
                    amount: 316.87,
                    date: '01-06-2015'
                },
                payment:  {
                    amount: 316.90,
                    date: '28-05-2015'
                }
            },
            {
                no: 6,
                name: 'Rata 6',
                remains: 16200,
                done: true,
                plan: {
                    amount: 317.77,
                    date: '01-07-2015'
                },
                payment:  {
                    amount: 322.89,
                    date: '29-06-2015'
                }
            },
            {
                no: 7,
                name: 'Rata 7',
                remains: 15900,
                done: true,
                plan: {
                    amount: 319.20,
                    date: '03-08-2015'
                },
                payment:  {
                    amount: 300.42,
                    date: '03-08-2015'
                }
            },
            {
                no: 8,
                name: 'Rata 8',
                remains: 15600,
                done: true,
                plan: {
                    amount: 316.59,
                    date: '01-09-2015'
                },
                payment:  {
                    amount: 316.57,
                    date: '01-09-2015'
                }
            },
            {
                no: 9,
                name: 'Rata 9',
                remains: 15300,
                done: true,
                plan: {
                    amount: 316.83,
                    date: '01-10-2015'
                },
                payment:  {
                    amount: 316.82,
                    date: '01-10-2015'
                }
            },
            {
                no: 10,
                name: 'Rata 10',
                remains: 15000,
                done: true,
                plan: {
                    amount: 317.61,
                    date: '02-11-2015'
                },
                payment:  {
                    amount: 317.59,
                    date: '02-11-2015'
                }
            },
            {
                no: 11,
                name: 'Rata 11',
                remains: 14700,
                done: true,
                plan: {
                    amount: 315.64,
                    date: '01-12-2015'
                },
                payment:  {
                    amount: 315.63,
                    date: '01-12-2015'
                }
            },
            {
                no: 12,
                name: 'Rata 12',
                remains: 14400,
                done: true,
                plan: {
                    amount: 317.97,
                    date: '04-01-2016'
                },
                payment:  {
                    amount: 317.97,
                    date: '04-01-2016'
                }
            },
            {
                no: 13,
                name: 'Rata 13',
                remains: 14100,
                done: false,
                plan: {
                    amount: 314.50,
                    date: '01-02-2016'
                },
                payment:  {
                    amount: 0.00,
                    date: ''
                }
            },
            {
                no: 14,
                name: 'Rata 14',
                remains: 13800,
                done: false,
                plan: {
                    amount: 314.70,
                    date: '01-03-2016'
                },
                payment:  {
                    amount: 0.00,
                    date: ''
                }
            },
            {
                no: 15,
                name: 'Rata 15',
                remains: 13500,
                done: false,
                plan: {
                    amount: 315.38,
                    date: '01-04-2016'
                },
                payment:  {
                    amount: 0.00,
                    date: ''
                }
            },
            {
                no: 16,
                name: 'Rata 16',
                remains: 13200,
                done: false,
                plan: {
                    amount: 315.05,
                    date: '02-05-2016'
                },
                payment:  {
                    amount: 0.00,
                    date: ''
                }
            },
            {
                no: 17,
                name: 'Rata 17',
                remains: 12900,
                done: false,
                plan: {
                    amount: 314.24,
                    date: '01-06-2016'
                },
                payment:  {
                    amount: 0.00,
                    date: ''
                }
            },
            {
                no: 18,
                name: 'Rata 18',
                remains: 12600,
                done: false,
                plan: {
                    amount: 313.92,
                    date: '01-07-2016'
                },
                payment:  {
                    amount: 0.00,
                    date: ''
                }
            },
            {
                no: 19,
                name: 'Rata 19',
                remains: 12300,
                done: false,
                plan: {
                    amount: 314.05,
                    date: '01-08-2016'
                },
                payment:  {
                    amount: 0.00,
                    date: ''
                }
            },
            {
                no: 20,
                name: 'Rata 20',
                remains: 12000,
                done: false,
                plan: {
                    amount: 313.71,
                    date: '01-09-2016'
                },
                payment:  {
                    amount: 0.00,
                    date: ''
                }
            },
            {
                no: 21,
                name: 'Rata 21',
                remains: 11700,
                done: false,
                plan: {
                    amount: 313.81,
                    date: '03-10-2016'
                },
                payment:  {
                    amount: 0.00,
                    date: ''
                }
            },
            {
                no: 22,
                name: 'Rata 22',
                remains: 11400,
                done: false,
                plan: {
                    amount: 312.62,
                    date: '02-11-2016'
                },
                payment:  {
                    amount: 0.00,
                    date: ''
                }
            },
            {
                no: 23,
                name: 'Rata 23',
                remains: 11100,
                done: false,
                plan: {
                    amount: 311.89,
                    date: '01-12-2016'
                },
                payment:  {
                    amount: 0.00,
                    date: ''
                }
            },
            {
                no: 24,
                name: 'Rata 24',
                remains: 10800,
                done: false,
                plan: {
                    amount: 312.77,
                    date: '02-01-2017'
                },
                payment:  {
                    amount: 0.00,
                    date: ''
                }
            },
            {
                no: 25,
                name: 'Rata 25',
                remains: 10500,
                done: false,
                plan: {
                    amount: 311.65,
                    date: '01-02-2017'
                },
                payment:  {
                    amount: 0.00,
                    date: ''
                }
            },
            {
                no: 26,
                name: 'Rata 26',
                remains: 10200,
                done: false,
                plan: {
                    amount: 310.57,
                    date: '01-03-2017'
                },
                payment:  {
                    amount: 0.00,
                    date: ''
                }
            },
            {
                no: 27,
                name: 'Rata 27',
                remains: 9900,
                done: false,
                plan: {
                    amount: 312.10,
                    date: '03-04-2017'
                },
                payment:  {
                    amount: 0.00,
                    date: ''
                }
            },
            {
                no: 28,
                name: 'Rata 28',
                remains: 9600,
                done: false,
                plan: {
                    amount: 310.32,
                    date: '02-05-2017'
                },
                payment:  {
                    amount: 0.00,
                    date: ''
                }
            },
            {
                no: 29,
                name: 'Rata 29',
                remains: 9300,
                done: false,
                plan: {
                    amount: 310.36,
                    date: '01-06-2017'
                },
                payment:  {
                    amount: 0.00,
                    date: ''
                }
            },
            {
                no: 30,
                name: 'Rata 30',
                remains: 9000,
                done: false,
                plan: {
                    amount: 310.70,
                    date: '03-07-2017'
                },
                payment:  {
                    amount: 0.00,
                    date: ''
                }
            },
            {
                no: 31,
                name: 'Rata 31',
                remains: 8700,
                done: false,
                plan: {
                    amount: 309.39,
                    date: '01-08-2017'
                },
                payment:  {
                    amount: 0.00,
                    date: ''
                }
            },
            {
                no: 32,
                name: 'Rata 32',
                remains: 8400,
                done: false,
                plan: {
                    amount: 309.70,
                    date: '01-09-2017'
                },
                payment:  {
                    amount: 0.00,
                    date: ''
                }
            },
            {
                no: 33,
                name: 'Rata 33',
                remains: 8100,
                done: false,
                plan: {
                    amount: 309.36,
                    date: '02-10-2017'
                },
                payment:  {
                    amount: 0.00,
                    date: ''
                }
            },
            {
                no: 34,
                name: 'Rata 34',
                remains: 7800,
                done: false,
                plan: {
                    amount: 309.03,
                    date: '02-11-2017'
                },
                payment:  {
                    amount: 0.00,
                    date: ''
                }
            },
            {
                no: 35,
                name: 'Rata 35',
                remains: 7500,
                done: false,
                plan: {
                    amount: 308.13,
                    date: '01-12-2017'
                },
                payment:  {
                    amount: 0.00,
                    date: ''
                }
            },
            {
                no: 36,
                name: 'Rata 36',
                remains: 7200,
                done: false,
                plan: {
                    amount: 308.63,
                    date: '02-01-2018'
                },
                payment:  {
                    amount: 0.00,
                    date: ''
                }
            },
            {
                no: 37,
                name: 'Rata 37',
                remains: 6900,
                done: false,
                plan: {
                    amount: 307.77,
                    date: '01-02-2018'
                },
                payment:  {
                    amount: 0.00,
                    date: ''
                }
            },
            {
                no: 38,
                name: 'Rata 38',
                remains: 6600,
                done: false,
                plan: {
                    amount: 306.95,
                    date: '01-03-2018'
                },
                payment:  {
                    amount: 0.00,
                    date: ''
                }
            },
            {
                no: 39,
                name: 'Rata 39',
                remains: 6300,
                done: false,
                plan: {
                    amount: 307.83,
                    date: '03-04-2018'
                },
                payment:  {
                    amount: 0.00,
                    date: ''
                }
            },
            {
                no: 40,
                name: 'Rata 40',
                remains: 6000,
                done: false,
                plan: {
                    amount: 306.57,
                    date: '02-05-2018'
                },
                payment:  {
                    amount: 0.00,
                    date: ''
                }
            },
            {
                no: 41,
                name: 'Rata 41',
                remains: 5700,
                done: false,
                plan: {
                    amount: 306.47,
                    date: '01-06-2018'
                },
                payment:  {
                    amount: 0.00,
                    date: ''
                }
            },
            {
                no: 42,
                name: 'Rata 42',
                remains: 5400,
                done: false,
                plan: {
                    amount: 306.35,
                    date: '02-07-2018'
                },
                payment:  {
                    amount: 0.00,
                    date: ''
                }
            },
            {
                no: 43,
                name: 'Rata 43',
                remains: 5100,
                done: false,
                plan: {
                    amount: 305.83,
                    date: '01-08-2018'
                },
                payment:  {
                    amount: 0.00,
                    date: ''
                }
            },
            {
                no: 44,
                name: 'Rata 44',
                remains: 4800,
                done: false,
                plan: {
                    amount: 306.05,
                    date: '03-09-2018'
                },
                payment:  {
                    amount: 0.00,
                    date: ''
                }
            },
            {
                no: 45,
                name: 'Rata 45',
                remains: 4500,
                done: false,
                plan: {
                    amount: 304.83,
                    date: '01-10-2018'
                },
                payment:  {
                    amount: 0.00,
                    date: ''
                }
            },
            {
                no: 46,
                name: 'Rata 46',
                remains: 4200,
                done: false,
                plan: {
                    amount: 305.18,
                    date: '02-11-2018'
                },
                payment:  {
                    amount: 0.00,
                    date: ''
                }
            },
            {
                no: 47,
                name: 'Rata 47',
                remains: 3900,
                done: false,
                plan: {
                    amount: 304.68,
                    date: '03-12-2018'
                },
                payment:  {
                    amount: 0.00,
                    date: ''
                }
            },
            {
                no: 48,
                name: 'Rata 48',
                remains: 3600,
                done: false,
                plan: {
                    amount: 304.21,
                    date: '02-01-2019'
                },
                payment:  {
                    amount: 0.00,
                    date: ''
                }
            },
            {
                no: 49,
                name: 'Rata 49',
                remains: 3300,
                done: false,
                plan: {
                    amount: 303.88,
                    date: '01-02-2019'
                },
                payment:  {
                    amount: 0.00,
                    date: ''
                }
            },
            {
                no: 50,
                name: 'Rata 50',
                remains: 3000,
                done: false,
                plan: {
                    amount: 303.32,
                    date: '01-03-2019'
                },
                payment:  {
                    amount: 0.00,
                    date: ''
                }
            },
            {
                no: 51,
                name: 'Rata 51',
                remains: 2700,
                done: false,
                plan: {
                    amount: 303.34,
                    date: '01-04-2019'
                },
                payment:  {
                    amount: 0.00,
                    date: ''
                }
            },
            {
                no: 52,
                name: 'Rata 52',
                remains: 2400,
                done: false,
                plan: {
                    amount: 303.01,
                    date: '02-05-2019'
                },
                payment:  {
                    amount: 0.00,
                    date: ''
                }
            },
            {
                no: 53,
                name: 'Rata 53',
                remains: 2100,
                done: false,
                plan: {
                    amount: 302.76,
                    date: '03-06-2019'
                },
                payment:  {
                    amount: 0.00,
                    date: ''
                }
            },
            {
                no: 54,
                name: 'Rata 54',
                remains: 1800,
                done: false,
                plan: {
                    amount: 302.11,
                    date: '01-07-2019'
                },
                payment:  {
                    amount: 0.00,
                    date: ''
                }
            },
            {
                no: 55,
                name: 'Rata 55',
                remains: 1500,
                done: false,
                plan: {
                    amount: 302.01,
                    date: '01-08-2019'
                },
                payment:  {
                    amount: 0.00,
                    date: ''
                }
            },
            {
                no: 56,
                name: 'Rata 56',
                remains: 1200,
                done: false,
                plan: {
                    amount: 301.73,
                    date: '02-09-2019'
                },
                payment:  {
                    amount: 0.00,
                    date: ''
                }
            },
            {
                no: 57,
                name: 'Rata 57',
                remains: 900,
                done: false,
                plan: {
                    amount: 301.25,
                    date: '01-10-2019'
                },
                payment:  {
                    amount: 0.00,
                    date: ''
                }
            },
            {
                no: 58,
                name: 'Rata 58',
                remains: 600,
                done: false,
                plan: {
                    amount: 301.10,
                    date: '04-11-2019'
                },
                payment:  {
                    amount: 0.00,
                    date: ''
                }
            },
            {
                no: 59,
                name: 'Rata 59',
                remains: 300,
                done: false,
                plan: {
                    amount: 300.60,
                    date: '02-12-2019'
                },
                payment:  {
                    amount: 0.00,
                    date: ''
                }
            },
            {
                no: 60,
                name: 'Rata 60',
                remains: 0,
                done: false,
                plan: {
                    amount: 300.33,
                    date: '02-01-2020'
                },
                payment:  {
                    amount: 0.00,
                    date: ''
                }
            }
        ]
    },
    creditCard = {
        id: 12,
        name: 'Karta kredytowa',
        group: 'Kredyt',
        type: 'credit',
        paymentList: [
            {
                no: 1,
                name: 'Grudzień 2014',
                remains: 0,
                done: true,
                plan: {
                    amount: 511.45,
                    date: '27-01-2015'
                },
                payment:  {
                    amount: 511.45,
                    date: '03-01-2015'
                }
            },
            {
                no: 2,
                name: 'Styczeń 2015',
                remains: 0,
                done: true,
                plan: {
                    amount: 907.53,
                    date: '27-02-2015'
                },
                payment:  {
                    amount: 907.53,
                    date: '02-02-2015'
                }
            },
            {
                no: 3,
                name: 'Luty 2015',
                remains: 0,
                done: true,
                plan: {
                    amount: 989.67,
                    date: '27-03-2015'
                },
                payment:  {
                    amount: 989.67,
                    date: '02-03-2015'
                }
            },
            {
                no: 4,
                name: 'Marzec 2015',
                remains: 0,
                done: true,
                plan: {
                    amount: 1290.91,
                    date: '27-04-2015'
                },
                payment:  {
                    amount: 1290.91,
                    date: '02-04-2015'
                }
            },
            {
                no: 5,
                name: 'Kwiecień 2015',
                remains: 0,
                done: true,
                plan: {
                    amount: 228.04,
                    date: '27-05-2015'
                },
                payment:  {
                    amount: 228.04,
                    date: '05-05-2015'
                }
            },
            {
                no: 6,
                name: 'Maj 2015',
                remains: 0,
                done: true,
                plan: {
                    amount: 64.02,
                    date: '27-06-2015'
                },
                payment:  {
                    amount: 64.02,
                    date: '10-06-2015'
                }
            },
            {
                no: 7,
                name: 'Czerwiec 2015',
                remains: 0,
                done: true,
                plan: {
                    amount: 69.61,
                    date: '27-07-2015'
                },
                payment:  {
                    amount: 69.61,
                    date: '06-07-2015'
                }
            },
            {
                no: 8,
                name: 'Lipiec 2015',
                remains: 0,
                done: true,
                plan: {
                    amount: 2306.64,
                    date: '27-08-2015'
                },
                payment:  {
                    amount: 2306.64,
                    date: '04-08-2015'
                }
            },
            {
                no: 9,
                name: 'Sierpień 2015',
                remains: 0,
                done: true,
                plan: {
                    amount: 104.72,
                    date: '27-09-2015'
                },
                payment:  {
                    amount: 104.72,
                    date: '02-09-2015'
                }
            },
            {
                no: 10,
                name: 'Wrzesień 2015',
                remains: 0,
                done: true,
                plan: {
                    amount: 543.35,
                    date: '27-10-2015'
                },
                payment:  {
                    amount: 543.35,
                    date: '06-10-2015'
                }
            },
            {
                no: 11,
                name: 'Październik 2015',
                remains: 0,
                done: true,
                plan: {
                    amount: 1298.93,
                    date: '27-11-2015'
                },
                payment:  {
                    amount: 1298.93,
                    date: '02-10-2015'
                }
            },
            {
                no: 12,
                name: 'Listopad 2015',
                remains: 0,
                done: true,
                plan: {
                    amount: 822.48,
                    date: '27-12-2015'
                },
                payment:  {
                    amount: 822.48,
                    date: '03-12-2015'
                }
            },
            {
                no: 13,
                name: 'Grudzień 2015',
                remains: 0,
                done: true,
                plan: {
                    amount: 561.15,
                    date: '27-01-2016'
                },
                payment:  {
                    amount: 561.15,
                    date: '04-01-2016'
                }
            },
            {
                no: 14,
                name: 'Styczeń 2016',
                remains: 0,
                done: false,
                plan: {
                    amount: 0.00,
                    date: '27-02-2016'
                },
                payment:  {
                    amount: 0.00,
                    date: ''
                }
            },
            {
                no: 15,
                name: 'Luty 2016',
                remains: 0,
                done: false,
                plan: {
                    amount: 0.00,
                    date: '27-03-2016'
                },
                payment:  {
                    amount: 0.00,
                    date: ''
                }
            },
            {
                no: 16,
                name: 'Marzec 2016',
                remains: 0,
                done: false,
                plan: {
                    amount: 0.00,
                    date: '27-04-2016'
                },
                payment:  {
                    amount: 0.00,
                    date: ''
                }
            },
            {
                no: 17,
                name: 'Kwiecień 2016',
                remains: 0,
                done: false,
                plan: {
                    amount: 0.00,
                    date: '27-05-2016'
                },
                payment:  {
                    amount: 0.00,
                    date: ''
                }
            },
            {
                no: 18,
                name: 'Maj 2016',
                remains: 0,
                done: false,
                plan: {
                    amount: 0.00,
                    date: '27-06-2016'
                },
                payment:  {
                    amount: 0.00,
                    date: ''
                }
            },
            {
                no: 19,
                name: 'Czerwiec 2016',
                remains: 0,
                done: false,
                plan: {
                    amount: 0.00,
                    date: '27-07-2016'
                },
                payment:  {
                    amount: 0.00,
                    date: ''
                }
            },
            {
                no: 20,
                name: 'Lipiec 2016',
                remains: 0,
                done: false,
                plan: {
                    amount: 0.00,
                    date: '27-08-2016'
                },
                payment:  {
                    amount: 0.00,
                    date: ''
                }
            },
            {
                no: 21,
                name: 'Sierpień 2016',
                remains: 0,
                done: false,
                plan: {
                    amount: 0.00,
                    date: '27-09-2016'
                },
                payment:  {
                    amount: 0.00,
                    date: ''
                }
            },
            {
                no: 22,
                name: 'Wrzesień 2016',
                remains: 0,
                done: false,
                plan: {
                    amount: 0.00,
                    date: '27-10-2016'
                },
                payment:  {
                    amount: 0.00,
                    date: ''
                }
            },
            {
                no: 23,
                name: 'Październik 2016',
                remains: 0,
                done: false,
                plan: {
                    amount: 0.00,
                    date: '27-11-2016'
                },
                payment:  {
                    amount: 0.00,
                    date: ''
                }
            },
            {
                no: 24,
                name: 'Listopad 2016',
                remains: 0,
                done: false,
                plan: {
                    amount: 0.00,
                    date: '27-12-2016'
                },
                payment:  {
                    amount: 0.00,
                    date: ''
                }
            },
            {
                no: 25,
                name: 'Grudzień 2016',
                remains: 0,
                done: false,
                plan: {
                    amount: 0.00,
                    date: '27-01-2017'
                },
                payment:  {
                    amount: 0.00,
                    date: ''
                }
            }
        ]
    },
    obligationList = [
        rent,
        electricity,
        gas,
        food,
        fuel,
        phoneAdam,
        phoneAnna,
        equipmentEuro,
        equipmentNeonet,
        studentCredit,
        creditCard
    ];

module.exports = {
    obligationList: obligationList
};