const palindromes = function (str) {
str = str.replace(/\W/g, "").toLowerCase();
let reverseStr = str.split("").reverse().join("");
reverseStr = reverseStr.replace(/\W/g, "").toLowerCase();
if (reverseStr === str) {
    return true;
}
else {
    return false;
}
};

// Do not edit below this line
module.exports = palindromes;
