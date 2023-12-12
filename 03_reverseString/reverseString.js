const reverseString = function(input) {
    let reversed_s = "";
    for (let i = input.length -1; i >= 0; i--) {
        reversed_s += input[i];
    }
    return reversed_s
    


};

// Do not edit below this line
module.exports = reverseString;
