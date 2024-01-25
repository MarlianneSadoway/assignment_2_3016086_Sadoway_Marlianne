/**
 * Entry file for this library of functions. 
 */
// Load all functions in this library 
const findNaNIndex = require('./findNaNIndex');
const isArrayFactorChain = require('./isArrayFactorChain');
const countNumberOfArrays = require('./countNumberOfArrays');
const participants = require('./participants');
const winnersObject = require('./winnersObject');
const biggestLoser = require('./biggestLoser');

// Export all functions in this library 
module.exports = {
    findNaNIndex,
    isArrayFactorChain,
    countNumberOfArrays,
    participants,
    winnersObject,
    biggestLoser
}
