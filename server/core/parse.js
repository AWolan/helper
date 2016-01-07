'use strict';

var delimiters = [' ', '.', '/', '-'],
    findDelimiter = function (format) {
        var delimiter, i;

        for (i = 0; i < delimiters.length; i += 1) {
            delimiter = delimiters[i];
            if (format.indexOf(delimiter) > 0) {
                return delimiter;
            }
        }

        return '';
    };

module.exports = {
    date: function (date, format) {
        var year, month, day, yearIndex, monthIndex, dayIndex,
            delimiter, formatList, dateList;

        if (date && format) {
            delimiter = findDelimiter(format);
            formatList = format.split(delimiter);
            dateList = date.split(delimiter);

            yearIndex = formatList.indexOf('yyyy');
            monthIndex = formatList.indexOf('mm');
            dayIndex = formatList.indexOf('dd');

            year = parseInt(dateList[yearIndex], 10);
            month = parseInt(dateList[monthIndex], 10);
            day = parseInt(dateList[dayIndex], 10);

            return new Date(year, month - 1, day);
        } else {
            return null;
        }
    }
};