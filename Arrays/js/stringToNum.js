/* 
Some really funny web dev gave you a sequence of numbers from his API response as an sequence of strings!

You need to cast the whole array to the correct type.

Create the function that takes as a parameter a sequence of numbers represented as strings and outputs a sequence of numbers.

ie:["1", "2", "3"] to [1, 2, 3]

Note that you can receive floats as well.

- the function takes in a sequence of numbers represented as strings (can also include floats ex: 1.2)
- the functio returns that sequence of string numbers as numbers
- ["1", "2", "3"] to [1, 2, 3]
- 

*/

function toNumberArray(strArr) {
    // map through the array and cast each element to a number
    const numArr = strArr.map(item => Number(item))
    return numArr
}

console.log(toNumberArray(["1", "2", "3"]), [1, 2, 3])
console.log(toNumberArray(["1.1", "2", "3.3"]), [1.1, 2, 3.3])
console.log(toNumberArray(["-2", "2", "2"]), [-2, 2, 2])