Implement arrayIntersectionn function

The arrayIntersectionn function takes in two arrays, firstArr and secondArr, and returns a new array containing the intersection of the two arrays, meaning the elements that are present in both arrays. The function iterates over the elements of firstArr and checks if each element is present in secondArr. If the element is present and it hasn't been added to the result array neuArr yet, it is added. Finally, the function returns neuArr.

Changes Made:
- Renamed the function from arrayIntersectionn to arrayIntersection.
- Replaced neuArr variable with resultArray for better readability.
- Updated the function documentation.

Example Usage:
const arrayIntersection = require('./arrayIntersection');

const firstArray = [1, 2, 3, 4, 5];
const secondArray = [4, 5, 6, 7, 8];
const intersection = arrayIntersection(firstArray, secondArray);
console.log(intersection); // Output: [4, 5]

Please note that this Git commit assumes you are using a separate file called arrayIntersection.js to define and export the arrayIntersectionn function. You can customize the commit message and example usage according to your project's requirements.