/* 
You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

EXAMPLES: 
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

-- arr -- numbers - never empty -- could be negative
-- return new array with odd numbers sorted in asc .
*/

// function sortArray(array) {
// //figure out odd numbers => filter()
// const oddNums = array.filter(num => num % 2 !== 0).sort((a,b) => a - b)
// const sorted = array.map(num => num  % 2 === 0 ? num : oddNums.shift())
// return sorted
// }


// console.log(sortArray([5, 8, 6, 3, 4]), [3, 8, 6, 5, 4]) 
// console.log(sortArray([2, 9, 6, 1, 10]), [2, 1, 6, 9, 10])

function findTarget(nums, target) {
    const indices = new Map()
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i]
        if(map.has(complement)){
           return [map.get(complement) , i]
        }
        map.set(nums[i], i)
    }


}

console.log(findTarget([3, 2, 5, 6], 7), [0, 3])