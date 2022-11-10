/* 
An ordered sequence of numbers from 1 to N is given. One number might have deleted from it, then the remaining numbers were mixed. Find the number that was deleted.

Example:

The starting array sequence is [1,2,3,4,5,6,7,8,9]
The mixed array with one deleted number is [3,2,4,6,7,8,1,9]
Your function should return the int 5.
If no number was deleted from the starting array, your function should return the int 0.

Note: N may be 1 or less (in the latter case, the first array will be []).

-- ordered arr - mixed arr - 
-- return the deleted num from mixed arr or 0 if there is no deletion

*/

//     // check if both arr's are equal in length and if so return 0 
//     // if they are not equal in length run a filter method
//     // check if the indexOf the elements in the first array is missing from the index of the elmnts in sencond arr
const findDeletedNumber = (arr, mixedArr) => {
    return arr.length === mixedArr.length ? 0 : arr.filter(num => mixedArr.indexOf(num) === -1 ).join('')
}

console.log(findDeletedNumber([1,2,3,4], [3,4,1]), 2)
console.log(findDeletedNumber([1,2,3,4], [3,4,1,2]), 0)
console.log(findDeletedNumber([1,2,3,4,5,6,7,8,9], [1,9,7,4,6,2,3,8]), 5)
