/**
* Creates an object which lists each participant, and a list of who they've beaten, from a series of game matches. 
* @param {Array} inputArrayOfMatches The array of matches with each element as an object containing the 
* winner's name, the loser's name, and the loser_points for the match in the form: 
* { winner: '<winner's name>', loser: '<loser's name>',   loser_points: <number of loser points> }
* @return {Object} an object which lists each participant, and a list of who they've beaten.
*/
const participants = require('./participants');

const winnersObject = function(inputArrayOfMatches) {
    let participantNames = participants(inputArrayOfMatches); // Array of participant names 

    // Set up the Object so that the name of each participant as a key and the values are initially empty arrays 
    let participantVictories = {};
    participantNames.forEach(participant => {
        participantVictories[participant] = [];
    })

    // For each match, add the loser's name to the array for the list of who the winner has beaten
    for (let currentIndex = 0; currentIndex <= (inputArrayOfMatches.length - 1); currentIndex++) {
        // Check the loser's name is not already in the array 
        if (!participantVictories[inputArrayOfMatches[currentIndex].winner].includes(inputArrayOfMatches[currentIndex].loser)) {
            // Add the loser's name to the array  
            participantVictories[inputArrayOfMatches[currentIndex].winner].push(inputArrayOfMatches[currentIndex].loser); 
        }
    } 
    return participantVictories;
}

// Export the function
module.exports = winnersObject;
