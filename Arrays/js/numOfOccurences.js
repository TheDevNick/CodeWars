/* 
Write a function that returns the number of occurrences of an element in an array.

Examples
arr.numberOfOccurrences(0) === 1;
arr.numberOfOccurrences(4) === 0;
arr.numberOfOccurrences(2) === 2;

P: function takes in a value (could be number/string)
R: function returns a number
E: see above
P:  - use the filter method and find the length of what it returns
*/

Array.prototype.numberOfOccurrences = function(target) {
    return this.filter(i => i === target).length
}

var arr = [0, 1, 2, 2, 3];
arr.numberOfOccurrences("a");
console.log(arr.numberOfOccurrences(2));