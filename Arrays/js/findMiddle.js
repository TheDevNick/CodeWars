/* 
You need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

The input to the function will be an array of three distinct numbers.

For example:

gimme([2, 3, 1]) => 0
2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

Another example (just to make sure it is clear):

gimme([5, 10, 14]) => 1
10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.

--arr -- 3 distinc nums -- never less than 3 nums -- never empty
-- return index of num that is in the middle
-- [5, 9, 20] => 1
*/

function gimme(arr) {
    // create a copy of the original array (so we don't mutate it)
    // sort that copied arr and grab the second element.
    // get the original arr and grab the index of the element from the sorted arr

    return arr.indexOf([...arr].sort((a,b) => a - b)[1])

}

console.log(gimme([2, 3, 1]), 0)
console.log(gimme([5, 9, 20]), 1)
console.log(gimme([5, 10, 14]), 1)