const add = function(n, n2) {
  return n + n2;
  
	
};

const subtract = function(n, n2) {
  return n - n2;
  
	
};

const sum = function(array) {
  return array.reduce((total, current) => total + current, 0);

	
};

const multiply = function(n, n2) {
  return n * n2;

};

const power = function(b, e) {
  return Math.pow(b, e);
	
};

const factorial = function(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n -1);
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
