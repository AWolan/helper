/**
    year: format yyyy
    month: 1-12
    day: 1-31
    dayOfWeek: 0-6 (sunday - saturday)
    type:
        free - not norking day
        holiday - 
        leave - 
        work - 
*/

var january2015 = {
        month: 1,
        days: [
            {
                day: 1,
                dayOfWeek: 4,
                type: 'holiday',
                tasks: []
            },
            {
                day: 2,
                dayOfWeek: 5,
                type: 'holiday',
                tasks: []
            },
            {
                day: 3,
                dayOfWeek: 6,
                type: 'free',
                tasks: []
            },
            {
                day: 4,
                dayOfWeek: 0,
                type: 'free',
                tasks: []
            }
        ]
    },
    february2015 = {},
    march2015 = {},
    april2015 = {},
    may2015 = {},
    june2015 = {},
    july2015 = {},
    august2015 = {},
    september2015 = {},
    october2015 = {},
    november2015 = {},
    december2015 = {},
    january2016 = {
        month: 1,
        days: [
            {
                day: 1,
                dayOfWeek: 5,
                type: 'holiday',
                tasks: [
                    {
                        name: 'Nowy Rok',
                        fullDay: true,
                        start: null,
                        end: null
                    }
                ]
            },
            {
                day: 2,
                dayOfWeek: 6,
                type: 'free',
                tasks: []
            },
            {
                day: 3,
                dayOfWeek: 0,
                type: 'free',
                tasks: []
            },
            {
                day: 4,
                dayOfWeek: 1,
                type: 'leave',
                tasks: []
            },
            {
                day: 5,
                dayOfWeek: 2,
                type: 'leave',
                tasks: []
            },
            {
                day: 6,
                dayOfWeek: 3,
                type: 'holiday',
                tasks: [
                    {
                        name: 'Święto Trzech Króli',
                        fullDay: true,
                        start: null,
                        end: null
                    }
                ]
            },
            {
                day: 7,
                dayOfWeek: 4,
                type: 'work',
                tasks: []
            },
            {
                day: 8,
                dayOfWeek: 5,
                type: 'work',
                tasks: []
            },
            {
                day: 9,
                dayOfWeek: 6,
                type: 'free',
                tasks: []
            },
            {
                day: 10,
                dayOfWeek: 0,
                type: 'free',
                tasks: []
            },
            {
                day: 11,
                dayOfWeek: 1,
                type: 'work',
                tasks: []
            },
            {
                day: 12,
                dayOfWeek: 2,
                type: 'work',
                tasks: []
            },
            {
                day: 13,
                dayOfWeek: 3,
                type: 'work',
                tasks: []
            },
            {
                day: 14,
                dayOfWeek: 4,
                type: 'work',
                tasks: []
            },
            {
                day: 15,
                dayOfWeek: 5,
                type: 'work',
                tasks: []
            },
            {
                day: 16,
                dayOfWeek: 6,
                type: 'free',
                tasks: []
            },
            {
                day: 17,
                dayOfWeek: 0,
                type: 'free',
                tasks: []
            },
            {
                day: 18,
                dayOfWeek: 1,
                type: 'work',
                tasks: []
            },
            {
                day: 19,
                dayOfWeek: 2,
                type: 'work',
                tasks: []
            },
            {
                day: 20,
                dayOfWeek: 3,
                type: 'work',
                tasks: []
            },
            {
                day: 21,
                dayOfWeek: 4,
                type: 'work',
                tasks: []
            },
            {
                day: 22,
                dayOfWeek: 5,
                type: 'work',
                tasks: []
            },
            {
                day: 23,
                dayOfWeek: 6,
                type: 'free',
                tasks: []
            },
            {
                day: 24,
                dayOfWeek: 0,
                type: 'free',
                tasks: []
            },
            {
                day: 25,
                dayOfWeek: 1,
                type: 'work',
                tasks: []
            },
            {
                day: 26,
                dayOfWeek: 2,
                type: 'work',
                tasks: []
            },
            {
                day: 27,
                dayOfWeek: 3,
                type: 'work',
                tasks: []
            },
            {
                day: 28,
                dayOfWeek: 4,
                type: 'work',
                tasks: []
            },
            {
                day: 29,
                dayOfWeek: 5,
                type: 'work',
                tasks: []
            },
            {
                day: 30,
                dayOfWeek: 6,
                type: 'free',
                tasks: []
            },
            {
                day: 31,
                dayOfWeek: 0,
                type: 'free',
                tasks: []
            }
        ]
    },
    february2016 = {
        month: 2,
        days: [
            {
                day: 1,
                dayOfWeek: 1,
                type: 'work',
                tasks: []
            },
            {
                day: 2,
                dayOfWeek: 2,
                type: 'work',
                tasks: []
            },
            {
                day: 3,
                dayOfWeek: 3,
                type: 'work',
                tasks: []
            },
            {
                day: 4,
                dayOfWeek: 4,
                type: 'work',
                tasks: []
            },
            {
                day: 5,
                dayOfWeek: 5,
                type: 'work',
                tasks: [
                    {
                        name: 'Podróż na wesele Rafała i Zuzki',
                        fullDat: false,
                        start: '18:00',
                        end: '21:00'
                    }
                ]
            },
            {
                day: 6,
                dayOfWeek: 6,
                type: 'free',
                tasks: [
                    {
                        name: 'Ślub Rafała i Zuzki',
                        fullDay: false,
                        start: '14:00',
                        end: '23:59'
                    }
                ]
            },
            {
                day: 7,
                dayOfWeek: 0,
                type: 'free',
                tasks: [
                    {
                        name: 'Ślub Rafała i Zuzki c.d.',
                        fullDay: false,
                        start: '0:00',
                        end: '2:00'
                    },
                    {
                        name: 'Obiad poweselny',
                        fullDay: false,
                        start: '13:00',
                        end: '15:00'
                    },
                    {
                        name: 'Podróż powrotna z wesela Rafała i Zuzki',
                        fullDay: false,
                        start: '16:00',
                        end: '19:00'
                    }
                ]
            },
            {
                day: 8,
                dayOfWeek: 1,
                type: 'work',
                tasks: []
            },
            {
                day: 9,
                dayOfWeek: 2,
                type: 'work',
                tasks: []
            },
            {
                day: 10,
                dayOfWeek: 3,
                type: 'work',
                tasks: [
                    {
                        name: 'Środa popielcowa',
                        fullDay: true,
                        start: null,
                        end: null
                    }
                ]
            },
            {
                day: 11,
                dayOfWeek: 4,
                type: 'work',
                tasks: []
            },
            {
                day: 12,
                dayOfWeek: 5,
                type: 'work',
                tasks: []
            },
            {
                day: 13,
                dayOfWeek: 6,
                type: 'free',
                tasks: []
            },
            {
                day: 14,
                dayOfWeek: 0,
                type: 'free',
                tasks: []
            },
            {
                day: 15,
                dayOfWeek: 1,
                type: 'work',
                tasks: []
            },
            {
                day: 16,
                dayOfWeek: 2,
                type: 'work',
                tasks: []
            },
            {
                day: 17,
                dayOfWeek: 3,
                type: 'work',
                tasks: []
            },
            {
                day: 18,
                dayOfWeek: 4,
                type: 'work',
                tasks: []
            },
            {
                day: 19,
                dayOfWeek: 5,
                type: 'work',
                tasks: []
            },
            {
                day: 20,
                dayOfWeek: 6,
                type: 'free',
                tasks: []
            },
            {
                day: 21,
                dayOfWeek: 0,
                type: 'free',
                tasks: []
            },
            {
                day: 22,
                dayOfWeek: 1,
                type: 'work',
                tasks: []
            },
            {
                day: 23,
                dayOfWeek: 2,
                type: 'work',
                tasks: []
            },
            {
                day: 24,
                dayOfWeek: 3,
                type: 'work',
                tasks: []
            },
            {
                day: 25,
                dayOfWeek: 4,
                type: 'work',
                tasks: []
            },
            {
                day: 26,
                dayOfWeek: 5,
                type: 'work',
                tasks: []
            },
            {
                day: 27,
                dayOfWeek: 6,
                type: 'free',
                tasks: []
            },
            {
                day: 28,
                dayOfWeek: 0,
                type: 'free',
                tasks: []
            },
            {
                day: 29,
                dayOfWeek: 1,
                type: 'work',
                tasks: []
            }
        ]
    },
    march2016 = {
        month: 3,
        days: [
            {
                day: 1,
                dayOfWeek: 2,
                type: 'work',
                tasks: []
            },
            {
                day: 2,
                dayOfWeek: 3,
                type: 'work',
                tasks: []
            },
            {
                day: 3,
                dayOfWeek: 4,
                type: 'work',
                tasks: []
            },
            {
                day: 4,
                dayOfWeek: 5,
                type: 'work',
                tasks: []
            },
            {
                day: 5,
                dayOfWeek: 6,
                type: 'free',
                tasks: [
                    {
                        name: 'Lot: Katowice - Stavanger',
                        fullDay: false,
                        start: '14:55',
                        end: '17:10'
                    }
                ]
            },
            {
                day: 6,
                dayOfWeek: 0,
                type: 'free',
                tasks: []
            },
            {
                day: 7,
                dayOfWeek: 1,
                type: 'leave',
                tasks: []
            },
            {
                day: 8,
                dayOfWeek: 2,
                type: 'leave',
                tasks: [
                    {
                        name: 'Lot: Stavanger - Katowice',
                        fullDay: false,
                        start: '21:50',
                        end: '23:55'
                    }
                ]
            },
            {
                day: 9,
                dayOfWeek: 3,
                type: 'work',
                tasks: []
            },
            {
                day: 10,
                dayOfWeek: 4,
                type: 'work',
                tasks: []
            },
            {
                day: 11,
                dayOfWeek: 5,
                type: 'work',
                tasks: []
            },
            {
                day: 12,
                dayOfWeek: 6,
                type: 'free',
                tasks: []
            },
            {
                day: 13,
                dayOfWeek: 0,
                type: 'free',
                tasks: []
            },
            {
                day: 14,
                dayOfWeek: 1,
                type: 'work',
                tasks: []
            },
            {
                day: 15,
                dayOfWeek: 2,
                type: 'work',
                tasks: []
            },
            {
                day: 16,
                dayOfWeek: 3,
                type: 'work',
                tasks: []
            },
            {
                day: 17,
                dayOfWeek: 4,
                type: 'work',
                tasks: []
            },
            {
                day: 18,
                dayOfWeek: 5,
                type: 'work',
                tasks: []
            },
            {
                day: 19,
                dayOfWeek: 6,
                type: 'free',
                tasks: []
            },
            {
                day: 20,
                dayOfWeek: 0,
                type: 'free',
                tasks: []
            },
            {
                day: 21,
                dayOfWeek: 1,
                type: 'work',
                tasks: []
            },
            {
                day: 22,
                dayOfWeek: 2,
                type: 'work',
                tasks: []
            },
            {
                day: 23,
                dayOfWeek: 3,
                type: 'work',
                tasks: []
            },
            {
                day: 24,
                dayOfWeek: 4,
                type: 'leave',
                tasks: [
                    {
                        name: 'Wielki Czwartek',
                        fullDay: true,
                        start: null,
                        end: null
                    }
                ]
            },
            {
                day: 25,
                dayOfWeek: 5,
                type: 'leave',
                tasks: [
                    {
                        name: 'Wielki Piątek',
                        fullDay: true,
                        start: null,
                        end: null
                    }
                ]
            },
            {
                day: 26,
                dayOfWeek: 6,
                type: 'free',
                tasks: [
                    {
                        name: 'Wielka Sobota',
                        fullDay: true,
                        start: null,
                        end: null
                    }
                ]
            },
            {
                day: 27,
                dayOfWeek: 0,
                type: 'holiday',
                tasks: [
                    {
                        name: 'Wielkanoc',
                        fullDay: true,
                        start: null,
                        end: null
                    }
                ]
            },
            {
                day: 28,
                dayOfWeek: 1,
                type: 'holiday',
                tasks: [
                    {
                        name: 'Poniedziałek Wielkanocny',
                        fullDay: true,
                        start: null,
                        end: null
                    }
                ]
            },
            {
                day: 29,
                dayOfWeek: 2,
                type: 'leave',
                tasks: []
            },
            {
                day: 30,
                dayOfWeek: 3,
                type: 'work',
                tasks: []
            },
            {
                day: 31,
                dayOfWeek: 4,
                type: 'work',
                tasks: []
            }
        ]
    },
    april2016 = {
        month: 4,
        days: [
            {
                day: 1,
                dayOfWeek: 5,
                type: 'work',
                tasks: []
            },
            {
                day: 2,
                dayOfWeek: 6,
                type: 'free',
                tasks: []
            },
            {
                day: 3,
                dayOfWeek: 0,
                type: 'free',
                tasks: []
            },
            {
                day: 4,
                dayOfWeek: 1,
                type: 'work',
                tasks: []
            },
            {
                day: 5,
                dayOfWeek: 2,
                type: 'work',
                tasks: []
            },
            {
                day: 6,
                dayOfWeek: 3,
                type: 'work',
                tasks: []
            },
            {
                day: 7,
                dayOfWeek: 4,
                type: 'work',
                tasks: []
            },
            {
                day: 8,
                dayOfWeek: 5,
                type: 'work',
                tasks: []
            },
            {
                day: 9,
                dayOfWeek: 6,
                type: 'free',
                tasks: []
            },
            {
                day: 10,
                dayOfWeek: 0,
                type: 'free',
                tasks: []
            },
            {
                day: 11,
                dayOfWeek: 1,
                type: 'work',
                tasks: []
            },
            {
                day: 12,
                dayOfWeek: 2,
                type: 'work',
                tasks: []
            },
            {
                day: 13,
                dayOfWeek: 3,
                type: 'work',
                tasks: []
            },
            {
                day: 14,
                dayOfWeek: 4,
                type: 'work',
                tasks: []
            },
            {
                day: 15,
                dayOfWeek: 5,
                type: 'work',
                tasks: []
            },
            {
                day: 16,
                dayOfWeek: 6,
                type: 'free',
                tasks: []
            },
            {
                day: 17,
                dayOfWeek: 0,
                type: 'free',
                tasks: []
            },
            {
                day: 18,
                dayOfWeek: 1,
                type: 'work',
                tasks: []
            },
            {
                day: 19,
                dayOfWeek: 2,
                type: 'work',
                tasks: []
            },
            {
                day: 20,
                dayOfWeek: 3,
                type: 'work',
                tasks: []
            },
            {
                day: 21,
                dayOfWeek: 4,
                type: 'work',
                tasks: []
            },
            {
                day: 22,
                dayOfWeek: 5,
                type: 'work',
                tasks: []
            },
            {
                day: 23,
                dayOfWeek: 6,
                type: 'free',
                tasks: []
            },
            {
                day: 24,
                dayOfWeek: 0,
                type: 'free',
                tasks: []
            },
            {
                day: 25,
                dayOfWeek: 1,
                type: 'work',
                tasks: []
            },
            {
                day: 26,
                dayOfWeek: 2,
                type: 'work',
                tasks: []
            },
            {
                day: 27,
                dayOfWeek: 3,
                type: 'work',
                tasks: []
            },
            {
                day: 28,
                dayOfWeek: 4,
                type: 'work',
                tasks: []
            },
            {
                day: 29,
                dayOfWeek: 5,
                type: 'work',
                tasks: []
            },
            {
                day: 30,
                dayOfWeek: 6,
                type: 'free',
                tasks: []
            }
        ]
    },
    may2016 = {
        month: 5,
        days: [
            {
                day: 1,
                dayOfWeek: 0,
                type: 'holiday',
                tasks: []
            },
            {
                day: 2,
                dayOfWeek: 1,
                type: 'leave',
                tasks: []
            },
            {
                day: 3,
                dayOfWeek: 2,
                type: 'holiday',
                tasks: []
            },
            {
                day: 4,
                dayOfWeek: 3,
                type: 'work',
                tasks: []
            },
            {
                day: 5,
                dayOfWeek: 4,
                type: 'work',
                tasks: []
            },
            {
                day: 6,
                dayOfWeek: 5,
                type: 'work',
                tasks: []
            },
            {
                day: 7,
                dayOfWeek: 6,
                type: 'free',
                tasks: []
            },
            {
                day: 8,
                dayOfWeek: 0,
                type: 'free',
                tasks: []
            },
            {
                day: 9,
                dayOfWeek: 1,
                type: 'work',
                tasks: []
            },
            {
                day: 10,
                dayOfWeek: 2,
                type: 'work',
                tasks: []
            },
            {
                day: 11,
                dayOfWeek: 3,
                type: 'work',
                tasks: []
            },
            {
                day: 12,
                dayOfWeek: 4,
                type: 'work',
                tasks: []
            },
            {
                day: 13,
                dayOfWeek: 5,
                type: 'work',
                tasks: []
            },
            {
                day: 14,
                dayOfWeek: 6,
                type: 'free',
                tasks: []
            },
            {
                day: 15,
                dayOfWeek: 0,
                type: 'free',
                tasks: []
            },
            {
                day: 16,
                dayOfWeek: 1,
                type: 'work',
                tasks: []
            },
            {
                day: 17,
                dayOfWeek: 2,
                type: 'work',
                tasks: []
            },
            {
                day: 18,
                dayOfWeek: 3,
                type: 'work',
                tasks: []
            },
            {
                day: 19,
                dayOfWeek: 4,
                type: 'work',
                tasks: []
            },
            {
                day: 20,
                dayOfWeek: 5,
                type: 'work',
                tasks: []
            },
            {
                day: 21,
                dayOfWeek: 6,
                type: 'free',
                tasks: []
            },
            {
                day: 22,
                dayOfWeek: 0,
                type: 'free',
                tasks: []
            },
            {
                day: 23,
                dayOfWeek: 1,
                type: 'work',
                tasks: []
            },
            {
                day: 24,
                dayOfWeek: 2,
                type: 'work',
                tasks: []
            },
            {
                day: 25,
                dayOfWeek: 3,
                type: 'work',
                tasks: []
            },
            {
                day: 26,
                dayOfWeek: 4,
                type: 'holiday',
                tasks: [
                    {
                        name: 'Boże Ciało',
                        fullDay: true,
                        start: null,
                        end: null
                    }
                ]
            },
            {
                day: 27,
                dayOfWeek: 5,
                type: 'leave',
                tasks: []
            },
            {
                day: 28,
                dayOfWeek: 6,
                type: 'free',
                tasks: []
            },
            {
                day: 29,
                dayOfWeek: 0,
                type: 'free',
                tasks: []
            },
            {
                day: 30,
                dayOfWeek: 1,
                type: 'work',
                tasks: []
            },
            {
                day: 31,
                dayOfWeek: 2,
                type: 'work',
                tasks: []
            }
        ]
    },
    june2016 = {},
    july2016 = {},
    august2016 = {},
    september2016 = {},
    october2016 = {},
    november2016 = {},
    december2016 = {},
    year2015 = {
        year: 2015,
        months: [
            january2015,
            february2015,
            march2015,
            april2015,
            may2015,
            june2015,
            july2015,
            august2015,
            september2015,
            october2015,
            november2015,
            december2015
        ]
    },
    year2016 = {
        year: 2016,
        months: [
            january2016,
            february2016,
            march2016,
            april2016,
            may2016,
            june2016,
            july2016,
            august2016,
            september2016,
            october2016,
            november2016,
            december2016
        ]
    };

module.exports = {
    
};