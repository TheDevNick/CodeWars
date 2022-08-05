/* 
In this Kata your task will be to return the count of pairs that have consecutive numbers as follows:

pairs([1,2,5,8,-4,-3,7,6,5]) = 3
The pairs are selected as follows [(1,2),(5,8),(-4,-3),(7,6),5]
--the first pair is (1,2) and the numbers in the pair are consecutive; Count = 1
--the second pair is (5,8) and are not consecutive
--the third pair is (-4,-3), consecutive. Count = 2
--the fourth pair is (7,6), also consecutive. Count = 3. 
--the last digit has no pair, so we ignore.

P: function takes in an array of numbers (positive or negative)
R: function returns the count of consecutive pairs
E: see above
P: see inside of function
*/

function pairs(arr) {
// create a variable to hold the count
let count = 0
// first lets sort the array to make things easier
    arr.sort((a, b) => a -b)
// lets loop through the array
    for (let i = 0; i < arr.length; i++) {
        //  add condition to check if consecutive
        if(arr[i] + 1 != arr[i + 1] - 1) {  // if 1 === 1+1       1 + 1
            count++
        }
        // console.log(arr[i] + 1 === arr[i + 1]);
    }
    return count
}

console.log(pairs([1,2,5,8,-4,-3,7,6,5]))