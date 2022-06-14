/* 
As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

The input to the function will be an array of three distinct numbers (Haskell: a tuple).

For example:

gimme([2, 3, 1]) => 0

P: functions takes in an array of 3 numbers
R: function returns middle number
E: gimme([2, 3, 1]) => 0 since 2 is the middle number
P: - find the min number and the max number
    - loop through array and return the index of the number thats not the min or max
*/

function gimme (triplet) {
    const min = Math.min(...triplet)
    const max = Math.max(...triplet)
    for(let i = 0; i < triplet.length; i++) {
        if (triplet[i] !== min && triplet[i] !== max){
            return triplet.indexOf(triplet[i])
        }
    }
}

console.log(gimme([5, 10, 14]))