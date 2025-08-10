const removeFromArray = function(arr, ...items) {
    for (element of items)
        arr = (arr.filter(item => item !== element))
    return arr
};

// Do not edit below this line
module.exports = removeFromArray;
