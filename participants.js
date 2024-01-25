/**
* Creates an array of all the participant names in a series of game matches with no player listed more than once. 
* @param {Array} inputArrayOfMatches The array of matches with each element as an object containing the 
* winner's name, the loser's name, and the loser_points for the match in the form: 
* { winner: '<winner's name>', loser: '<loser's name>',   loser_points: <number of loser points> }
* @return {Array} an array of all the participant names with no player listed more than once.
*/
const participants = function(inputArrayOfMatches) {
    let participantNames = []; // array to store participant names 
    for (let currentIndex = 0; currentIndex <= (inputArrayOfMatches.length - 1); currentIndex++) {
        if (!participantNames.includes(inputArrayOfMatches[currentIndex].winner)) {
            // Add the winner's name if it is not already in the array 
            participantNames.push(inputArrayOfMatches[currentIndex].winner);
        }
        if (!participantNames.includes(inputArrayOfMatches[currentIndex].loser)) {
            // Add the loser's name if it is not already in the array 
            participantNames.push(inputArrayOfMatches[currentIndex].loser);
        }
    } 
    return participantNames;
}

// Export the function
module.exports = participants;
