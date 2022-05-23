/* 
Write a function that returns a string in which firstname is swapped with last name.

nameShuffler('john McClane'); => "McClane john"


*/

let nameShuffler = string => string.split(' ').reverse().join(' ')

console.log(nameShuffler("Nick Hollins"))