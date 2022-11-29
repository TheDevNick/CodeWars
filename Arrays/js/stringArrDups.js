/* 
In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

For example:

dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].

dup(["kelless","keenness"]) = ["keles","kenes"].

Strings will be lowercase only, no spaces. See test cases for more examples.
--str arr -- no spaces - lowercase only -- not empty
-- return arr with dups removed


*/


// map through the array
//  inside the map .split each element (so they can just be letters) and filter => return letter if next letter does not equal curr letter then join()
// const filterDups = strArr.filter((word, index, array) => array[word[index]] !== array[word[index + 1]] )
const dup = strArr => strArr.map((word, i, arr) => word.split('').filter((x, i, arr) => x !== arr[i + 1]).join(''))

console.log(dup(["abracadabra", "allottee", "assessee"]),["abracadabra","alote","asese"] )
console.log(dup(["nick", "niick", "nickk"]),["nick", "nick", "nick"] )