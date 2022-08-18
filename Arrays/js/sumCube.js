/* 
Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.

[1, 2, 3, 4] => 28 (1^3 = 1, 2^3 = 8, 3^3 = 27, 4^3 = 64) => [1, 8, 27, 64] => 28

P: function takes in an array
R: function returns the sum of odd numbers in the array after all numbers are cubed
E: see above
P: See inside function
*/

const cubeOdd = arr => {
    // cube the items in the array first
    const cubeArr = arr.map(num => Math.pow(num, 3))
    let sum = 0
    // loop through the array and add the sum to the odd numbers inside of the array
    for (let i = 0; i < cubeArr.length; i++) {
        // make sure the numbers in the array are actually numbers
        if (isNaN(cubeArr[i])) return 'undefin'
        // check for odd numbers
        if (cubeArr[i] % 2 === 1) {
            sum += cubeArr[i] 
        }
    }
    return sum
}

console.log(cubeOdd([1, 2, 3, 4]))