const sumAll = function(min, max) {
    if(!Number.isInteger(min) || !Number.isInteger(max) || min < 1 || max < 1)
        return "ERROR"
    if (min > max){
        const temp = min
        min = max
        max = temp
    }
    let total = 0
    while (min <= max){
        total += min
        min ++
    }
    return total
};

// Do not edit below this line
module.exports = sumAll;
