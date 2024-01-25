/**
* Finds all the indexes where NaN is found in a given array of numbers and NaN.
* @param {Array} inputArray The array to find the indexes of NaN in. 
* @return {Array} arrayOfIndexes The array containing the indexes where NaN was found in the input array. 
*/
const findNaNIndex = function(inputArray) {
    let arrayOfIndexes = []; // Array to store the indexes 
    for (let currentIndex = 0; currentIndex <= (inputArray.length - 1); currentIndex++) {
        // Check if the element at the current index in the array is NaN 
        if (isNaN(inputArray[currentIndex])) {
            // Add to arrayOfIndexes 
            arrayOfIndexes.push(currentIndex);
        }
    }
    return arrayOfIndexes;
 }

 // Export the function
module.exports = findNaNIndex;
