/* 
Given an array of strings of the same letter type. Return a new array, which will differ in that the length of each element is equal to the average length of the elements of the previous array.

A few examples:

['u', 'y'] =>  ['u', 'y'] // average length is 1
['aa', 'bbb', 'cccc'] => ['aaa', 'bbb', 'ccc'] // average length is 3
['aa', 'bb', 'ddd', 'eee'] => ['aaa', 'bbb', 'ddd', 'eee'] // average length is 2.5 round up to 3
If the average length is not an integer, use Math.round().
The input array's length > 1

-- arr -- strings -- no numbers -- never empty -- always greater than 1
-- return new arr -- each str in new arr must have the average length of old arr

*/

function averageLength(arr){
// get the average length of arr
// map through arr
// repeat each char avgLen times

const avgLength = Math.round(arr.reduce((acc, curr) => acc + curr, '').length / arr.length)
const newArr = arr.map(word => word[0].repeat(avgLength))
return newArr
}


console.log(averageLength(['aaaa', 'bb', 'cccccc']), ['aaaa', 'bbbb', 'cccc'])
console.log(averageLength(["aa", "bbb", "cccc"]), ["aaa", "bbb", "ccc"])
console.log(averageLength(["u", "y"]), ["u", "y"])