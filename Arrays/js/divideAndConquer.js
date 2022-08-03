/* 
Given a mixed array of number and string representations of integers, add up the string integers and subtract this from the total of the non-string integers.

Return as a number.

P: the function takes in an array of numbers and string representation of numbers (ex: [1 , '2', 3, '4'])
R: the funciton returns a number which is the total number of string integers subtracted from the total number of non string integers
E: [1 , '2', 3, '4', 5, 6] => non string (15) - string (6) = 9
    [9, 3, '7', '3'] => 2  (12 - 10)
P: see inside of the function
*/

function divCon(x){
// create a variable that holds the sum of all non string integers
    let nonStringIntSum = x.filter(num => typeof num === 'number')
    nonStringIntSum = nonStringIntSum.reduce((acc, curr) => acc + curr, 0)
    // create a variable that holds the sum of all string integers
    let stringIntSum = x.filter(num => typeof num === 'string')
    stringIntSum = stringIntSum.map(num => Number(num))
    stringIntSum = stringIntSum.reduce((acc, curr) => acc + curr, 0)
// subtract the sum of  string ints from the sum of non string ints
// return the difference
    return  nonStringIntSum - stringIntSum
}

console.log(divCon([9, 3, '7', '3'])) //2

