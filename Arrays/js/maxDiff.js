/* 
You must implement a function that returns the difference between the largest and the smallest value in a given list / array (lst) received as the parameter.

lst contains integers, that means it may contain some negative numbers
if lst is empty or contains a single element, return 0
lst is not sorted
[1, 2, 3, 4]   //  returns 3 because 4 -   1  == 3
[1, 2, 3, -4]  //  returns 7 because 3 - (-4) == 7

P: function takes in an array of integers (positive and/or negative)
R: the function returns the difference between the largest and smallest number in the array
E: [1, 2, 3, 4]   //  returns 3 because 4 -   1  == 3
P: see inside of function
*/

function maxDiff(arr) {
// first lets get the min and max values from the array
const max = Math.max(...arr)
const min = Math.min(...arr)
// 
// we could have just did return Math.max(...arr) - Math.min(...arr) 
return arrmax - min
}

console.log(maxDiff([1, 2, 3, 4]))//3
console.log(maxDiff([1, 2, 3, -4]))//7