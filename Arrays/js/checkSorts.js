/* 
Complete the method which accepts an array of integers, and returns one of the following:

"yes, ascending" - if the numbers in the array are sorted in an ascending order
"yes, descending" - if the numbers in the array are sorted in a descending order
"no" - otherwise
You can assume the array will always be valid, and there will always be one correct answer.

P: fucntion takes in a integer array
R: function returns a string
E: isSortedAndHow([1, 2]) => 'yes, ascending'
P: - compare the array given vs a sorted version of the array
*/

function isSortedAndHow(array) {
    return arr.every((x,i) => i == 0 || arr[i] >= arr[i-1]) ? 'yes, ascending': arr.every((x,i) => i == 0 || arr[i] <= arr[i-1]) ?'yes, descending':'no'
  }

const result = isSortedAndHow([1,2,3,4])
console.log(result)



