/* 
A trick I learned in elementary school to determine whether or not a number was divisible by three is to add all of the integers in the number together and to divide the resulting sum by three. If there is no remainder from dividing the sum by three, then the original number is divisible by three as well.

Given a series of digits as a string, determine if the number represented by the string is divisible by three.

Example:

"123"      -> true
"8409"     -> true
"100853"   -> false
"33333333" -> true
"7"        -> false

-- str - nums as string -- never empty -- always nums in the string
-- return boolean 
*/

function divisibleByThree(str){
// turn str to array of nums
// sum the arr
// divide sum by 3
return [...str].map(Number).reduce((acc, curr) => acc + curr , 0) % 3 === 0
}

console.log(divisibleByThree('123'), true)
console.log(divisibleByThree('8409'), true)
console.log(divisibleByThree("100853"), false);
console.log(divisibleByThree("7"), false);