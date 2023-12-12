const palindromes = function (str) {
    let palin = ''
    for (let i = str.length -1; i >= 0; i--) {
        palin += str[i]
    }
    if (palin === str) {
        return true
    } 
};

// Do not edit below this line
module.exports = palindromes;
