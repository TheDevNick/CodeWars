/* 
Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56

Function:

getNumberFromString(s)

-- function takes in a string (mixed with different characters)
-- function returns the number with only the numbers that was in the string 
-- ex: "1ade2f" => "12"
*/


function getNumberFromString(str) {
// first turn the string into an array
// filter through it and see if the array contains numbers 0-9 and then join those numbers
const result = str.split("").filter(x => "0123456789".includes(x)).join("")
return Number(result)


}

console.log(getNumberFromString("1ade2f"), 12)
// console.log(getNumberFromString("H3110"), 3110)
// console.log(getNumberFromString("by3"), 3)