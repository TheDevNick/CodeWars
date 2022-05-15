/* 
Write a function called repeatStr which repeats the given string string exactly n times.

PREP
P: take in a number and a string
R: we are going to return the string (N times)
E: repeatStr(6, "I") // "IIIIII"
repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"
P: 
- create a function named repeatStr 
- the function should take in the number of times the string should be called and the actual string 
- I can either use a while loop or to make it simple use the built in string repeat() method
*/


  let repeatStr = (numberOfTimes, str) => str.repeat(numberOfTimes)

  console.log(repeatStr(5, "Hello"))