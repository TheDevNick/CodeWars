/* 
Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

Example:

Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].

P: function takes in a array with arrays in it
R: function returns a single array thats sorted
E: [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9]
P: - concatenate the arrays
    - sort the arrays once concatenated
*/

function flattenAndSort(array) {
    // Good luck, brave code warrior!
    return [].concat(...array).sort((a,b) => a - b);
  }

  console.log(flattenAndSort([[3, 2, 1], [4, 6, 5], [], [9, 7, 8]]))