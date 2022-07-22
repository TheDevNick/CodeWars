/* 
Given an array/list [] of n integers , find maximum triplet sum in the array Without duplications .

Notes :
Array/list size is at least 3 .

Array/list numbers could be a mixture of positives , negatives and zeros .

Repetition of numbers in the array/list could occur , So (duplications are not included when summing).

Input >> Output Examples
1- maxTriSum ({3,2,6,8,2,3}) ==> return (17)

P: function takes in an array of numbers (at least 3 nums in the array)
R: function returns a number (sum of three max numbers)
E: see above
P: - see inside function

*/
function maxTriSum(numbers){
    // get rid of duplicates (use Set())
    let set = [...new Set(numbers)]

    // sort the array 
    set.sort((a,b) => a - b)

    // add last 3 items in array
    let tripletSum = set.slice(-3).reduce((acc, curr) => acc + curr, 0)
    return tripletSum
  }


console.log(maxTriSum([3,2,6,8,2,3])) // => 17