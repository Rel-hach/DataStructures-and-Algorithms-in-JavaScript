

const findMissingNumber = require('../15_find-missing-number/find-missing-number')

/*
    the ascii of a is 97
                 b is 98
                 c is 99

    ----------------------

        1 + 96 = a
        2 + 96 = b

*/


const convertToIntArray = arr => {

    const intArr = [];

    arr.forEach(element => {
        intArr.push (element.charCodeAt(0) - 96);
    });
    return (intArr);
}

const findMissingLetter = (arr) => {

    const intArr = convertToIntArray(arr);

    const missingAsciiLetter = findMissingNumber(intArr) + 96;

    return (String.fromCharCode(missingAsciiLetter));
}

module.exports = findMissingLetter;