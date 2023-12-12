


// he formula for the sum of the first n positive integers is : 
//  Sn = n(n+1)/2.

let findMissingNumber = (arr) => {

    const n = arr.length + 1;

    const sum = (n * (n + 1)) / 2;

    let sumOfArrayElements = 0;
    
    arr.forEach(element => {
        sumOfArrayElements += element;
    });

    return (sum - sumOfArrayElements);    
}

module.exports = findMissingNumber;