/* 
You are given an array of n+1 integers 1 through n. In addition there is a single duplicate integer.

The array is unsorted.

An example valid array would be [3, 2, 5, 1, 3, 4]. It has the integers 1 through 5 and 3 is duplicated. [1, 2, 4, 5, 5] would not be valid as it is missing 3.

You should return the duplicate value as a single integer.

--function takes a array of ints 
-- function returns the duplicated int in the array. 
-- 

*/

function findDup(arr) {
    let duplicateValue = 0
    // sort the array
    const sortedArr = arr.sort((a, b) => a - b) 
    // loop through array
    for (let i = 0; i < sortedArr.length; i++ ) {
        // check if the current element is equal to the next element 
        if (arr[i] === arr[i + 1]) {
             return arr[i] += duplicateValue
        }
    }
}


console.log(findDup([3, 2, 5, 1, 4, 4]), 4)