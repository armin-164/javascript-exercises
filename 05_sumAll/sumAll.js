const sumAll = function(...args) {
let sum = 0;
let min, max;

if (args[0] > 0 && args[1] > 0 && typeof args[0] === "number" && typeof args[1] === "number") {
    if (args[0] > args[1]) {
        max = args[0];
        min = args[1];
        for (i = min; i <= max; i++) {
            sum += i;
        }
        return sum;
    }
    else {
        for (i = args[0]; i <= args[1]; i++) {
            sum += i;
        }
        return sum;
    }
}
else {
    return "ERROR";
}

};

// Do not edit below this line
module.exports = sumAll;
