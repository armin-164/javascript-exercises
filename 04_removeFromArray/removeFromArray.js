const removeFromArray = function(array, ...otherArrays) {
let emptyArray = [];
for (let i = 0; i < array.length; i++) {
    if (!otherArrays.includes(array[i])) {
        emptyArray.push(array[i]);
    }
}
return emptyArray;
};

// Do not edit below this line
module.exports = removeFromArray;
