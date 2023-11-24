function reverseString(str) {

    let reversedStr = "";
    let x = str.length - 1;

    for (let i = 0; i < str.length; i++){
        reversedStr += str[x - i];
    }
    return (reversedStr);
}


/*
    function reverseString(str) {

    let reversedStr = "";
    let x = str.length - 1;

    for (let i = x; i >= 0; i--){
        reversedStr += str[i];
    }
    return (reversedStr);
}
*/



// const reverseString = (str) => str.split("").reverse().join('');

// in the last example we split the string to have an array of character so we can reverse it with reverse () then we join it again.

module.exports = reverseString;