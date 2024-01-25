/**
* Determines if an array is a factor chain or not. 
* @param {Array} inputArray The array to determine if is a factor chain or not.
* @return {Boolean} true if an array is a factor chain or false if not. 
*/
const isArrayFactorChain = function(inputArray) {
    for (let currentIndex = 1; currentIndex <= (inputArray.length - 1); currentIndex++) {
        // Determine if the element before the current index is a factor of the element at the current index 
        if (inputArray[currentIndex] % inputArray[currentIndex-1] != 0) {
            // If a single pair of elements doesn't fullfill the requirements, the function returns false 
            return false;
        }
    } 
    return true;
}

// Export the function
module.exports = isArrayFactorChain;
