const removeDuplicates = require('./remove-duplicates');

const arr = [1,2,3,1,4,5,2,85,3,4,3,'hello',8,9,6,2,'hello'];

const strWithNoDup = removeDuplicates(arr);


for (let i = 0; i < strWithNoDup.length; i++) {
    console.log (`element ${i} is = ${strWithNoDup[i]} \n`);
}