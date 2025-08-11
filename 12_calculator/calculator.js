const add = function(x, y) {
  return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(item) {
  return  item.reduce((sum, num) => sum + num, 0)
};

const multiply = function(items) {
  return items.reduce((multiple, num) => multiple * num, 1)
};

const power = function(x, y) {
	return x**y
};

const factorial = function(x) {
  let factor = 1
  if (x == 0)
    return 1;
	else
  {
    for(let i = 1; i <= x; i ++){
    factor *= i
  }
  return factor
}
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
