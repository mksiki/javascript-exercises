const removeFromArray = function(arr, n) {
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== n) {
            newArr.push(arr[i])
        }
    }
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;


// var removeFromArray = function(array, ...args) {
//   return array.filter(val => !args.includes(val))
// This one also makes sense if you have an idea on how arrow functions work