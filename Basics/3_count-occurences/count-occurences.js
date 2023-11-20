// function countOccurences(str, character) {
//     let count = 0;

//     for (let i = 0; i < str.length; i++)
//     {
//         if (str[i] === character)
//             count++;
//     }
//     return (count);
// }


// another way 

const countOccurences = (str, char) => str.split(char).length - 1;

module.exports = countOccurences;