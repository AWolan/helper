var maxDay = [31, [28, 29], 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    staticHolidayList = [
        {
            month: 1,
            day: 1,
            name: 'Nowy Rok',
            isHoliday: true
        },
        {
            month: 1,
            day: 6,
            name: 'Święto Trzech Króli',
            isHoliday: true
        },
        {
            month: 1,
            day: 21,
            name: 'Dzień Babci',
            isHoliday: false
        },
        {
            month: 1,
            day: 22,
            name: 'Dzień Dziadka',
            isHoliday: false
        },
        {
            month: 2,
            day: 2,
            name: 'Ofiarowanie Pańskie',
            isHoliday: false
        },
        {
            month: 2,
            day: 14,
            name: 'Walentynki',
            isHoliday: false
        },
        {
            month: 3,
            day: 8,
            name: 'Dzień Kobiet',
            isHoliday: false
        },
        {
            month: 3,
            day: 10,
            name: 'Dzień Mężczyzn',
            isHoliday: false
        },
        {
            month: 4,
            day: 1,
            name: 'Prima Aprillis',
            isHoliday: false
        },
        {
            month: 5,
            day: 1,
            name: 'Święto Pracy',
            isHoliday: true
        },
        {
            month: 5,
            day: 2,
            name: 'Dzień Flagi Rzeczpospolitej Polski',
            isHoliday: false
        },
        {
            month: 5,
            day: 3,
            name: 'Święto Konstytucji 3 Maja',
            isHoliday: true
        },
        {
            month: 5,
            day: 26,
            name: 'Dzień Matki',
            isHoliday: false
        },
        {
            month: 6,
            day: 1,
            name: 'Dzień dziecka',
            isHoliday: false
        },
        {
            month: 6,
            day: 23,
            name: 'Dzień Ojca',
            isHoliday: false
        },
        {
            month: 8,
            day: 15,
            name: 'Wniebowzięcie Najświętszej Maryi Panny',
            isHoliday: true
        },
        {
            month: 9,
            day: 30,
            name: 'Dzień Chłopaka',
            isHoliday: false
        },
        {
            month: 11,
            day: 1,
            name: 'Wszystkich Świętych',
            isHoliday: true
        },
        {
            month: 11,
            day: 2,
            name: 'Dzień zaduszny',
            isHoliday: false
        },
        {
            month: 11,
            day: 11,
            name: 'Święto Niepodległości',
            isHoliday: true
        },
        {
            month: 12,
            day: 6,
            name: 'Mikołaj',
            isHoliday: false
        },
        {
            month: 12,
            day: 25,
            name: 'Boże Narodzenie (pierwszy dzień)',
            isHoliday: true
        },
        {
            month: 12,
            day: 26,
            name: 'Boże Narodzenie (drugi dzień)',
            isHoliday: true
        },
        {
            month: 12,
            day: 31,
            name: 'Sylwester',
            isHoliday: false
        }
    ],
    movableHolidayIntervals = [
        {
            days: 0,
            name: 'TŁusty Czwartek',
            isHoliday: false
        },
        {
            days: 6,
            name: 'Środa Popielcowa',
            isHoliday: false
        },
        {
            days: 43,
            name: 'Wielki Czwartek',
            isHoliday: false
        },
        {
            days: 1,
            name: 'Wielki Piątek',
            isHoliday: false
        },
        {
            days: 1,
            name: 'Wielka Sobota',
            isHoliday: false
        },
        {
            days: 1,
            name: 'Wielkanoc',
            isHoliday: true
        },
        {
            days: 1,
            name: 'Poniedziałek Wielkanocny',
            isHoliday: false
        },
        {
            days: 48,
            name: 'Zesłanie Ducha Świętego',
            isHoliday: false
        },
        {
            days: 11,
            name: 'Boże Ciało',
            isHoliday: false
        }
    ],
    anniversaryList = [
        {
            month: 1,
            day: 3,
            name: 'Imieniny babci Gieni',
            isHoliday: false
        },
        {
            month: 1,
            day: 4,
            name: 'Imieniny Angeliki',
            isHoliday: false
        },
        {
            month: 1,
            day: 6,
            name: 'Imieniny Kacpra',
            isHoliday: false
        },
        {
            month: 2,
            day: 27,
            name: 'Urodziny taty Jurka',
            isHoliday: false
        },
        {
            month: 3,
            day: 1,
            name: 'Urodziny Kuby',
            isHoliday: false
        },
        {
            month: 3,
            day: 4,
            name: 'Imieniny taty Krzyśka',
            isHoliday: false
        },
        {
            month: 3,
            day: 4,
            name: 'Imieniny babci Kazi',
            isHoliday: false
        },
        {
            month: 3,
            day: 23,
            name: 'Urodziny Jasia',
            isHoliday: false
        },
        {
            month: 3,
            day: 28,
            name: 'Urodziny taty Krzyśka',
            isHoliday: false
        },
        {
            month: 4,
            day: 23,
            name: 'Imieniny taty Jurka',
            isHoliday: false
        },
        {
            month: 4,
            day: 23,
            name: 'Imieniny Wojciecha',
            isHoliday: false
        },
        {
            month: 5,
            day: 8,
            name: 'Imieniny babci Stasi',
            isHoliday: false
        },
        {
            month: 6,
            day: 2,
            name: 'Urodziny mamy Eli',
            isHoliday: false
        },
        {
            month: 6,
            day: 4,
            name: 'Urodziny Kacpra',
            isHoliday: false
        },
        {
            month: 6,
            day: 11,
            name: 'Urodziny Adasia',
            isHoliday: false
        },
        {
            month: 6,
            day: 18,
            name: 'Imieniny mamy Eli',
            isHoliday: false
        },
        {
            month: 7,
            day: 1,
            name: 'Imieniny dziadka Mariana',
            isHoliday: false
        },
        {
            month: 7,
            day: 15,
            name: 'Urodziny mamy Ewy',
            isHoliday: false
        },
        {
            month: 7,
            day: 15,
            name: 'Imieniny dziadka Heńka',
            isHoliday: false
        },
        {
            month: 7,
            day: 25,
            name: 'Imieniny Kuby',
            isHoliday: false
        },
        {
            month: 7,
            day: 25,
            name: 'Rocznica śmierci dziadka Staszka',
            isHoliday: false
        },
        {
            month: 7,
            day: 26,
            name: 'Imieniny Ani',
            isHoliday: false
        },
        {
            month: 8,
            day: 8,
            name: 'Rocznica naszego ślubu',
            isHoliday: false
        },
        {
            month: 8,
            day: 24,
            name: 'Urodziny babci Kazi',
            isHoliday: false
        },
        {
            month: 8,
            day: 30,
            name: 'Rocznica ślubu Angeliki i Kuby',
            isHoliday: false
        },
        {
            month: 9,
            day: 1,
            name: 'Rocznica ślubu rodziców Ewy i Jurka',
            isHoliday: false
        },
        {
            month: 9,
            day: 15,
            name: 'Rocznica ślubu rodziców Eli i Krzyśka',
            isHoliday: false
        },
        {
            month: 9,
            day: 27,
            name: 'Urodziny Błażeja Pałys',
            isHoliday: false
        },
        {
            month: 9,
            day: 28,
            name: 'Urodziny babci Kasi',
            isHoliday: false
        },
        {
            month: 9,
            day: 29,
            name: 'Urodziny babci Gieni',
            isHoliday: false
        },
        {
            month: 10,
            day: 4,
            name: 'Urodziny Angeliki',
            isHoliday: false
        },
        {
            month: 10,
            day: 9,
            name: 'Urodziny babci Stasi',
            isHoliday: false
        },
        {
            month: 11,
            day: 5,
            name: 'Urodziny Wojciecha',
            isHoliday: false
        },
        {
            month: 11,
            day: 25,
            name: 'Imieniny babci Kasi',
            isHoliday: false
        },
        {
            month: 12,
            day: 4,
            name: 'Urodziny Ani',
            isHoliday: false
        },
        {
            month: 12,
            day: 24,
            name: 'Imieniny mamy Ewy',
            isHoliday: false
        },
        {
            month: 12,
            day: 24,
            name: 'Imieniny Adasia',
            isHoliday: false
        },
        {
            month: 12,
            day: 26,
            name: 'Rocznica ślubu dziadków Gieni i Heńka',
            isHoliday: false
        }
    ];

module.exports = {
    maxDay: maxDay,
    staticHolidayList: staticHolidayList,
    movableHolidayIntervals: movableHolidayIntervals,
    anniversaryList: anniversaryList
};