/* 
Input: Array of elements

["h","o","l","a"]

Output: String with comma delimited elements of the array in th same order.

"h,o,l,a"
*/


// function printArray(array){
//     //show me the code!
//     return array.join(",")
//   }

//   console.log(printArray(["h","o","l","a"]))

let isAllPositives = num => num > 0
let arr = [1,2,3,4,5]

console.log(arr.every(isAllPositives))