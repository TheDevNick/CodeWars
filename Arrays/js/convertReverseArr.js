/* 
Convert number to reversed array of digits
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example(Input => Output):
35231 => [1,3,2,5,3]
0 => [0]

--function takes in a set of random numbers
-- function returns the numbers in an array but in a reversed order
-- 35231 => [1,3,2,5,3]

*/

function reverseOrder(num) {
    // take the number and turn it to an array of numbers as strings
    let str = String(num)
    str = str.split('')
    // map through the array and turn them to numbers and then reverse the order
    let arr = str.map(el => Number(el)).reverse()
    return arr
  
}

console.log(reverseOrder(35231), [1,3,2,5,3])