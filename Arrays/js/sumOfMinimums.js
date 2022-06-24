/* 
Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.

For Example:

[ [ 1, 2, 3, 4, 5 ]        #  minimum value of row is 1
, [ 5, 6, 7, 8, 9 ]        #  minimum value of row is 5
, [ 20, 21, 34, 56, 100 ]  #  minimum value of row is 20
]

P: function takes in 2D array/list 
R: the sum of the minumum element in each array 
E: [ [ 1, 2, 3, 4, 5 ]        #  minimum value of row is 1
, [ 5, 6, 7, 8, 9 ]        #  minimum value of row is 5
, [ 20, 21, 34, 56, 100 ]  #  minimum value of row is 20
] = > some is 26
P: - loop through each array and find the minimum element
    - set a sum variable
    -use spread operator to find min for all the arrays
    - add them all up(the minimum elements)
*/

function sumOfMinimums(arr) {
    // your code here
    let sum = 0
    for(let i = 0; i < arr.length; i++) {
         sum += Math.min(...arr[i])
         console.log(Math.min(...arr[i]))
    }
    return sum
  }

  console.log(sumOfMinimums([ [ 1, 2, 3, 4, 5 ], [ 5, 6, 7, 8, 9 ], [ 20, 21, 34, 56, 100 ]]))
