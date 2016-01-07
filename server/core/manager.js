'use strict';

var FullMonth = function (year, month) {
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
            var year = this.month === 1 ? this.year - 1 : this.year,
                month = this.month === 1 ? 12 : this.month - 1;

            return new FullMonth(year, month);
        },
        getNextMonth: function () {
            var year = this.month === 12 ? this.year + 1 : this.year,
                month = this.month === 12 ? 1 : this.month + 1;

            return new FullMonth(year, month);
        }
    };
};

module.exports = {
    getMonth: function (year, month) {
        return new FullMonth(year, month);
    }
};