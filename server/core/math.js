'use strict';

module.exports = {
    sum: function (list) {
        var i, result = 0;
        for (i = 0; i < list.length; i += 1) {
            result += list[i];
        }
        return result;
    }
};