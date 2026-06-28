const add = function(first,second) {
  return first + second;
};

const subtract = function(first,second) {
	return first - second;
};

const sum = function(arr) {
	return arr.reduce((accumulator,value) => accumulator + value,0);
};

const multiply = function(arr) {
  return arr.reduce((accumulator,value) => accumulator * value,1);
};

const power = function(base,exponent) {
	return base**exponent
};

const factorial = function(num) {
  if(num == 1 || num == 0){
    return 1;
  }

	return num * factorial(num-1)
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
