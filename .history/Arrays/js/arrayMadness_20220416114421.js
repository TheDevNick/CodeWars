/*
    Objective:
Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

arrayMadness([4, 5, 6], [1, 2, 3]); // returns true since 4 ** 2 + 5 ** 2 + 6 ** 2 > 1 ** 3 + 2 ** 3 + 3 ** 3
*/

/*
PSUEDODCODE:
1.get the sum of squared elements in array 'a'
2. get the sum of cubed elements in array 'b'
3. compare the sums of both arrays
4. return true if sum of array 'a' is greater than sum of array 'b'
*/

function arrayMadness(arr1) {
    // Ready, get set, GO!!!
    const arr1Sum = arr1.reduce((acc, curr) => acc + ((2 ** curr)))
    console.log(arr1Sum);
  }

//   arrayMadness([1,2,3])