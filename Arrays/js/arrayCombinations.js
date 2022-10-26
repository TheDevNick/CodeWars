/* 
you will be given an array of arrays and your task will be to return the number of unique arrays that can be formed by picking exactly one element from each subarray.

For example: solve([[1,2],[4],[5,6]]) = 4, because it results in only 4 possibilites. They are [1,4,5],[1,4,6],[2,4,5],[2,4,6].

Make sure that you don't count duplicates; for example solve([[1,2],[4,4],[5,6,6]]) = 4, since the extra outcomes are just duplicates.
*/

function solve(arr) {
    // make sure there is no duplicates in the sub arrays
    // multiply the the sizes of each subarray
    return arr.map(subArr => new Set(subArr).size).reduce((acc, curr) => acc * curr , 1)
}

console.log(solve([[1, 2], [4], [5, 6]]), 4) //[145][146][245][246]

console.log(solve([[1,2],[3,4],[5,6]]), 8)//[135][146][235][246][315][326][415][426]


