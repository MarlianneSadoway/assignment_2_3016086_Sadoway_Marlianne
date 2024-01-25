# Project Title
cmpt-315-assignment-2 
## Purpose
**_BEWARE:_ This library was published for learning purposes. 
This is a basic JavaScript library that provides some functions to manipulate arrays and objects. It was created for CMPT 315 Assignment 2 at MacEwan University. 
## Usage
**Install it:**
`npm install @marliannesadoway/cmpt-315-assignment-2`
**Require it:**
`const _ = require('@marliannesadoway/cmpt-315-assignment-2');`
**Call it:**
`const results1 = _.findNaNIndex([2, 4, NaN, 16, 32, NaN])`  // => [2,5]
`const results2 = _.isArrayFactorChain([2, 4, 8, 16, 32])` // => true
`const results3 = _.countNumberOfArrays([2,8,[6],3,3,5,3,4,[5,4]])` // => 2
const matches = [
  { winner: 'Alice', loser: 'Bob',   loser_points: 3 },
  { winner: 'Carol', loser: 'Dean',  loser_points: 1 },
  { winner: 'Elise', loser: 'Bob',   loser_points: 2 },
  { winner: 'Elise', loser: 'Carol', loser_points: 4 },
  { winner: 'Alice', loser: 'Carol', loser_points: 2 },
  { winner: 'Carol', loser: 'Dean',  loser_points: 3 },
  { winner: 'Dean',  loser: 'Elise', loser_points: 2 },
]
`const results4 = _.participants(matches)` // => ['Alice', 'Bob', 'Carol', 'Dean', 'Elise']
`const results5 = _.winnersObject(matches)` // => 
{
    'Alice': ['Bob', 'Carol'],
    'Bob':   [],
    'Carol': ['Dean'],
    'Dean':  ['Elise'],
    'Elise': ['Bob', 'Carol'],
  }
`const results6 = _.biggestLoser(matches)` // => 'Bob'
## Documentation
The following functions are currently implemented:
* `findNaNIndex(inputArray)`: Finds all the indexes where NaN is found in a given array of numbers and NaN.
* `isArrayFactorChain(inputArray)`: Determines if an array is a factor chain or not. 
* `countNumberOfArrays(inputArray)`: Determines the count for the number of arrays inside a given array.
* `participants(inputArrayOfMatches)`: Creates an array of all the participant names in a series of game matches with no player listed more than once. 
* `winnersObject(inputArrayOfMatches)`: Creates an object which lists each participant, and a list of who they've beaten, from a series of game matches.
* `biggestLoser(inputArrayOfMatches)`: Determines the player with the biggest tally of loser_points in a series of game matches.