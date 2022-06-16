/* 
JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.

The solution would work like the following:

getEvenNumbers([2,4,5,6]) // should == [2,4,6]

P: function takes in a array
R: function returns array with even elements only
E: getEvenNumbers([2,4,5,6]) // should == [2,4,6]
P: - use the filter method
    - if num % 2 === 0
*/

function getEvenNumbers(arr) {
    return arr.filter(a => a % 2 === 0)
}

console.log(getEvenNumbers([2,4,5,6]))