'use strict';

var FullMonth = function (year, month) {
    var prev = {
            year: month > 1 ? year : year - 1,
            month: month > 1 ? month - 1 : 12
        },
        next = {
            year: month < 12 ? year : year + 1,
            month: month < 12 ? month + 1 : 1
        };
    
    return {
        year: year,
        month: month,
        getFirstDay: function () {
            if (this.year && this.month) {
                return new Date(this.year, this.month - 1, 1);
            } else {
                return null;
            }
        },
        getLastDay: function () {
            if (this.year && this.month) {
                return new Date(this.year, this.month, 0);
            } else {
                return null;
            }
        },
        getPrevMonth: function () {
            return new FullMonth(prev.year, prev.month);
        },
        getNextMonth: function () {
            return new FullMonth(next.year, next.month);
        }
    };
};

module.exports = {
    getMonth: function (year, month) {
        return new FullMonth(year, month);
    },
    getActualMonth: function () {
        var now = new Date(),
            actual = new FullMonth(now.getFullYear(), now.getMonth() + 1);
        
        return {
            actual: actual,
            prev: actual.getPrevMonth(),
            next: actual.getNextMonth()
        };
    }
};