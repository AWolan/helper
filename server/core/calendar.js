'use strict';

var dayCount = [31, [28, 29], 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
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
            month: 3,
            day: 1,
            name: 'Święto Pracy',
            isHoliday: true
        },
        {
            month: 3,
            day: 3,
            name: 'Święto Konstytucji 3 Maja',
            isHoliday: true
        },
        {
            month: 8,
            day: 15,
            name: 'Wniebowzięcie Najświętszej Maryi Panny',
            isHoliday: true
        },
        {
            month: 11,
            day: 1,
            name: 'Wszystkich Świętych',
            isHoliday: true
        },
        {
            month: 11,
            day: 11,
            name: 'Święto Niepodległości',
            isHoliday: true
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
        }
    ],
    movableHolidayIntervals = [
        {
            days: 0,
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
    getDayCount = function (month, isLeapYear) {
        if (month === 2) {
            return isLeapYear ? dayCount[1][1] : dayCount[1][0];
        } else {
            return dayCount[month - 1];
        }
    },
    nextDay = function (month, day, isLeapYear) {
        var maxDay = getDayCount(month, isLeapYear),
            isNextMonth = day + 1 > maxDay;
        
        return {
            month: isNextMonth ? month + 1 : month,
            day: isNextMonth ? 1 : day + 1
        };
    },
    getDay = function (month, day, interval, isLeapYear) {
        var maxDayOfMonth = getDayCount(month, isLeapYear),
            newInterval, result = {};
        
        if (day + interval > maxDayOfMonth) {
            newInterval = day + interval - maxDayOfMonth - 1;
            return getDay(month + 1, 1, newInterval, isLeapYear);
        }
        
        return {
            month: month,
            day: day + interval
        };
    },
    getMovableHolidayList = function (startMonth, startDay, isLeapYear) {
        var i, movableHolidayInterval, movableHolidayList = [],
            day = {
                month: startMonth,
                day: startDay
            };
        
        for (i = 0; i < movableHolidayIntervals.length; i += 1) {
            movableHolidayInterval = movableHolidayIntervals[i];
            console.log(day);
            day = getDay(day.month, day.day, movableHolidayInterval.days, isLeapYear);
            
            movableHolidayList.push({
                month: day.month,
                day: day.day,
                name: movableHolidayInterval.name,
                isHoliday: movableHolidayInterval.isHoliday
            });
        }
        
        return movableHolidayList;
    },
    getHoliday = function (holidayList, month, day) {
        var i, holiday, eventList = [];
        
        for (i = 0; i < holidayList.length; i += 1) {
            holiday = holidayList[i];
            
            if (holiday.month === month && holiday.day === day) {
                eventList.push({
                    name: holiday.name,
                    isHoliday: holiday.isHoliday,
                    fullDay: true,
                    start: null,
                    end: null
                });
            }
        }
        
        return eventList;
    },
    getType = function (dayOfWeek, eventList) {
        var i;
        if (eventList && eventList.length > 0) {
            for (i = 0; i < eventList.length; i += 1) {
                if (eventList[i].isHoliday) {
                    return 'holiday';
                }
            }
        }
        if (dayOfWeek === 0 || dayOfWeek === 6) {
            return 'free';
        } else {
            return 'work';
        }
    };



module.exports = {
    generateYear: function (year, startMonth, startDay) {
        var month, day, monthList = [], dayList = [],
            dayOfWeek, eventList,
            isLeapYear = year % 4 === 0,
            movableHolidayList = getMovableHolidayList(startMonth, startDay, isLeapYear),
            holidayList = staticHolidayList.concat(movableHolidayList);
        
        
        for (month = 1; month <= 12; month += 1) {
            dayList = [];
            for (day = 1; day <= getDayCount(month, isLeapYear); day += 1) {
                dayOfWeek = new Date(year, month - 1, day).getDay();
                eventList = getHoliday(holidayList, month, day);
                dayList.push({
                    day: day,
                    datOfWeek: dayOfWeek,
                    type: getType(dayOfWeek, eventList),
                    eventList: eventList
                });
            }
            monthList.push({
                month: month,
                dayList: dayList
            });
        }
        console.log(movableHolidayList);
        return {
            year: year,
            monthList: monthList
        };
    }
};