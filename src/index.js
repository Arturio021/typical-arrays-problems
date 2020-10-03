exports.min = function min(array) {
    if (array && array.length > 0) {
        var minArr = array[0];
        for (var i = 0; i < array.length; i++) {
            if (array[i] < minArr) {
                minArr = array[i];
            }
        }
        return minArr;
    } else {
        return 0;
    }
};