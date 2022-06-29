/* 
Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.
Input >> Output Examples
adjacentElementsProduct([1, 2, 3]); ==> return 6
Explanation:
The maximum product obtained from multiplying 2 * 3 = 6, and they're adjacent numbers in the array.

P: function takes in a array of numbers
R: function returns the maximum product from multiplying adjacent numbers in the array
E: adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48]); ==> return 50
P: - create a variable for a empty array
    - loop through the array passed in
    - push the array index * array index + 1 
    - return the max element in the new array variable that you created.
*/

function adjacentElementsProduct(array) {
    let newArr = []
    for (let i = 0; i < array.length-1; i++) {
        newArr.push(array[i] * array[i + 1])
    }
    return Math.max(...newArr)
  }

  console.log(adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48]))