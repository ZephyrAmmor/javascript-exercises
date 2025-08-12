const fibonacci = function(num) {
    num = Number(num)
    if (num < 0)
        return "OOPS"
    if (num == 0)
        return 0
    let result = 1
    let prevResult = 0
    for(let i = 1; i < num; i++){
        const temp = result 
        result += prevResult
        prevResult = temp
    }
    return result
};

// Do not edit below this line
module.exports = fibonacci;
