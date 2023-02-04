const add = function(n1, n2) {
	return n1 + n2;
};

const subtract = function(n1, n2) {
	return n1 - n2;
};

const sum = function(nums) {
	let total = 0;
  for (let i = 0; i < nums.length; i++) {
    total += nums[i];
  }
  return total;
};

const multiply = function(nums) {
  let total = 1;
  for (let i = 0; i < nums.length; i++) {
    total = total * nums[i];
  }
  return total;
};

const power = function(n1, n2) {
	return Math.pow(n1, n2);
};

const factorial = function(nums) {
  let total = 1;
  for (let i = 0; i < nums; i++) {
    total = total * (nums - i);
  }
  return total;
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
