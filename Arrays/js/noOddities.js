/* 
Write a small function that returns the values of an array that are not odd.

All values in the array will be integers. Return the good values in the order they are given.

P: function takes in a array
R: function returns non odd values
E: [1, 2, 3, 4] => [2, 4]
P: filter through the array to see which numbers in the array not odd
*/

function noOdds( values ){
    // Return all non-odd values
    return values.filter(value => value % 2 === 0)
  }

  console.log(noOdds([1,2,3,4]))