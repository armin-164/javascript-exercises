const fibonacci = function(num) {
let sum = 0;
let previousValue = 1;
let container = 0;

if (num <= 0) {
    return "OOPS";
}
else {
    for (i = 0; i < num; i++) {
        container = previousValue;
        previousValue = sum;
        sum += container;
    }
    return sum;
}
};

// Do not edit below this line
module.exports = fibonacci;
