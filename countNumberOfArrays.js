/**
* Determines the count for the number of arrays inside a given array. 
* @param {Array} inputArray The given array to count the number of arrays it contains as elements. 
* @return {Number} the number of arrays inside a given array.
*/
const countNumberOfArrays = function(inputArray) {
    let count = 0; // 0 arrays to start 
    for (let currentIndex = 0; currentIndex <= (inputArray.length - 1); currentIndex++) {
        if (inputArray[currentIndex] instanceof Array) {
            count++; // increment when an element is an array 
        }
    } 
    return count;
}

// Export the function
module.exports = countNumberOfArrays;
