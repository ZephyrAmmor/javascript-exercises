const palindromes = function (str) {
    str = str.toLowerCase()
    let arr = str.split('').filter(item => {
        if (item !== ' ' && item !== ',' && item !== '.' && item!== '!')
            return item
    })
    console.log(arr)
    let copyArr = arr
    for(let i = 0, j = copyArr.length - 1; i < arr.length, j >= 0; i++, j--){
        if (arr[i] !== copyArr[j])
            return false;
    }
    return true
};

// Do not edit below this line
module.exports = palindromes;
// This solutions is like I'm in C
