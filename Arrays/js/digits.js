/*
Convert number to reversed array of digits
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

EXAMPLE: 
348597 => [7,9,5,8,4,3]
0 => [0]
*/

/*
--- PSEUDOCODE---
1. convert the number of digits into a string
2. split the string into seperate digits so ['54321'] will become ['5,4,3,2,1']
3. reverse the string so ['5,4,3,2,1'] will become ['1,2,3,4,5']
4.we still have to turn these into numbers since its currently a string
5. iterate over each element and turn it into a number using the map method
*/

function digitize(n) {
    //code here
    return String(n).split('').reverse().map(Number)
}

console.log(digitize(54321))//12345
