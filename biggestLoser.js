/**
* Determines the player with the biggest tally of loser_points in a series of game matches. 
* The loser_points are tallied as follows: if a player is the winner, the loser_points are  
* subtracted, and if a player is a loser, then the loser_points are added. 
* @param {Array} inputArrayOfMatches The array of matches with each element as an object containing the 
* winner's name, the loser's name, and the loser_points for the match in the form: 
* { winner: '<winner's name>', loser: '<loser's name>',   loser_points: <number of loser points> }
* @return {String} the name of the loser with the largest tally of loser_points.
*/
const participants = require('./participants');

const biggestLoser = function(inputArrayOfMatches) {
    let participantNames = participants(inputArrayOfMatches); // Array of participant names 

    // Set up the Object that will tally the points with the name of each participant as a key and the values are the points 
    let participantPoints = {};
    participantNames.forEach(participant => {
        participantPoints[participant] = 0; // Points are initially 0 
    })

    // For each match, subtract loser_points from the winner's points and add them to loser's points 
    for (let currentIndex = 0; currentIndex <= (inputArrayOfMatches.length - 1); currentIndex++) {
        participantPoints[inputArrayOfMatches[currentIndex].winner] -= inputArrayOfMatches[currentIndex].loser_points;
        participantPoints[inputArrayOfMatches[currentIndex].loser] += inputArrayOfMatches[currentIndex].loser_points;
    } 

    // Find the participant with the most loser_points 
    let biggestLoserPoints = -Infinity; 
    let biggestLosingParticipant = null;
    participantNames.forEach(participant => {
        // Check if any participant has more loser points than the current biggest loser 
        if (participantPoints[participant] > biggestLoserPoints) {
            // Update current biggestLosingParticipant to the name of the participant 
            biggestLosingParticipant = participant;
            // Update the biggestLoserPoints to the points the participant has 
            biggestLoserPoints = participantPoints[participant];
        }
    })
    return biggestLosingParticipant;
}

// Export the function 
module.exports = biggestLoser;
