/* 
Your task is to sum the differences between consecutive pairs in the array in descending order.

Example
[2, 1, 10]  -->  9
In descending order: [10, 2, 1]

Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell, None in Rust).

-- function takes in an array of numbers
    -- positive or negative numbers
-- function would return the sum of differences
-- [15, 3, 4] 
    --desc: [15, 4, 3] => (15 - 3 = 12) + (3 - 4 = -1) = 11
*/

function sumOfDifferences(arr) {
    // sort the array to desc order
    arr = arr.sort((a, b) => b - a)
    let sum = 0

    for(let i = 0; i < arr.length - 1; i++) {
        sum += arr[i] - arr[i + 1]
    }
    return sum
}

console.log(sumOfDifferences([2, 1, 10]), 9)
console.log(sumOfDifferences([15, 4, 3]), 12)