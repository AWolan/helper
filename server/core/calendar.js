'use strict';

var data = serverRequire('/data/calendar.js'),
    getMaxDay = function (month, isLeapYear) {
        if (month === 2) {
            return isLeapYear ? data.maxDay[1][1] : data.maxDay[1][0];
        } else {
            return data.maxDay[month - 1];
        }
    },
    nextDay = function (month, day, isLeapYear) {
        var maxDay = getMaxDay(month, isLeapYear),
            isNextMonth = day + 1 > maxDay;
        
        return {
            month: isNextMonth ? month + 1 : month,
            day: isNextMonth ? 1 : day + 1
        };
    },
    getDay = function (month, day, interval, isLeapYear) {
        var newInterval, maxDayOfMonth = getMaxDay(month, isLeapYear);
        
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
        
        for (i = 0; i < data.movableHolidayIntervals.length; i += 1) {
            movableHolidayInterval = data.movableHolidayIntervals[i];
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
    },
    getWeekViewForMonth = function (calendar, month, firstDay) {
        var i, j,
            actualDaysCount, prevDaysCount, prevMaxCount, nextDaysCount,
            actualMonth, prevMonth, nextMonth, day,
            dayList = [], dayOfWeekList = [], weekList = [],
            maxBeforeDays = 7,
            isLeapYear = calendar.year % 4 === 0;
        
        prevMonth = month > 1 ? calendar.monthList[month - 2] : {dayList: []};
        actualMonth = calendar.monthList[month - 1];
        nextMonth = month < 12 ? calendar.monthList[month] : {dayList: []};
        
        day = actualMonth.dayList[0];
        
        prevDaysCount = prevMonth.dayList.length - (7 - ((firstDay - day.dayOfWeek) % 7));
        prevMaxCount = prevMonth.dayList.length;
        actualDaysCount = actualMonth.dayList.length;
        nextDaysCount = 42 - actualDaysCount - (prevMaxCount - prevDaysCount);
        
        for (i = prevDaysCount; i < prevMaxCount; i += 1) {
            day = prevMonth.dayList[i];
            if (day) {
                dayList.push({
                    origin: 'prev',
                    month: prevMonth.month,
                    day: day.day,
                    dayOfWeek: day.dayOfWeek,
                    type: day.type,
                    eventList: day.eventList
                });
            } else {
                dayList.push({
                    origin: 'prev'
                });
            }
        }
        
        for (i = 0; i < actualDaysCount; i += 1) {
            day = actualMonth.dayList[i];
            dayList.push({
                origin: 'actual',
                month: actualMonth.month,
                day: day.day,
                dayOfWeek: day.dayOfWeek,
                type: day.type,
                eventList: day.eventList
            });
        }
        
        for (i = 0; i < nextDaysCount; i += 1) {
            day = nextMonth.dayList[i];
            if (day) {
                dayList.push({
                    origin: 'next',
                    month: nextMonth.month,
                    day: day.day,
                    dayOfWeek: day.dayOfWeek,
                    type: day.type,
                    eventList: day.eventList
                });
            } else {
                dayList.push({
                    origin: 'next'
                });
            }
        }
        
        for (i = 0; i < 6; i += 1) {
            dayOfWeekList = [];
            for (j = 0; j < 7; j += 1) {
                dayOfWeekList.push(dayList[i * 7 + j]);
            }
            weekList.push({
                dayList: dayOfWeekList
            });
        }
        
        return {
            month: month,
            weekList: weekList
        };
    };

module.exports = {
    generateYear: function (year, startMonth, startDay) {
        var month, day, monthList = [], dayList = [],
            dayOfWeek, eventList, maxDay,
            isLeapYear = year % 4 === 0,
            movableHolidayList = getMovableHolidayList(startMonth, startDay, isLeapYear),
            holidayList = movableHolidayList.concat(data.staticHolidayList, data.anniversaryList);
        
        
        for (month = 1; month <= 12; month += 1) {
            dayList = [];
            maxDay = getMaxDay(month, isLeapYear);
            for (day = 1; day <= maxDay; day += 1) {
                dayOfWeek = new Date(year, month - 1, day).getDay();
                eventList = getHoliday(holidayList, month, day);
                dayList.push({
                    day: day,
                    dayOfWeek: dayOfWeek,
                    type: getType(dayOfWeek, eventList),
                    eventList: eventList
                });
            }
            monthList.push({
                month: month,
                dayList: dayList
            });
        }

        return {
            year: year,
            monthList: monthList
        };
    },
    getWeekViewForMonth: getWeekViewForMonth,
    getWeekViewForYear: function (calendar, firstDay) {
        var i, month, monthList = [];
        for (i = 1; i <= 12; i += 1) {
            month = getWeekViewForMonth(calendar, i, firstDay);
            monthList.push(month);
        }
        return monthList;
    }
};