/* 
Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.

-- int as strings and nums -- will always be a num even if as string 
-- return as num
--
*/

function sumArray(arr) {
// take the array and cast each item as a Number
// now that all of the elements are nums , use reduce
const numArr = arr.map(item => Number(item))
return numArr.reduce((acc, curr) => acc + curr , 0)
}

console.log(sumArray(['1', 2, '3']), 6)
console.log(sumArray([1, '2', '3']), 6)
console.log(sumArray(['1', '2', 0]), 3)