/* 
Complete the method which accepts an array of integers, and returns one of the following:

"yes, ascending" - if the numbers in the array are sorted in an ascending order
"yes, descending" - if the numbers in the array are sorted in a descending order
"no" - otherwise
You can assume the array will always be valid, and there will always be one correct answer.

P: fucntion takes in a integer array
R: function returns a string
E: isSortedAndHow([1, 2]) => 'yes, ascending'
P: - use the every method to check if the array is increasing or decreasing
  - check the current array element vs the previous array element to see it the current element is higher, if so, it is asceding order
*/

function isSortedAndHow(arr) {
    return arr.every((x,i) => i == 0 || arr[i] >= arr[i-1]) ? 'yes, ascending': arr.every((x,i) => i == 0 || arr[i] <= arr[i-1]) ?'yes, descending':'no'
  }

const result = isSortedAndHow([1,2,3,4])
console.log(result)



