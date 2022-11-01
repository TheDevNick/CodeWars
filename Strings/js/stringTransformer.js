/* 
Given a string, return a new string that has transformed based on the input:

Change case of every character, ie. lower case to upper case, upper case to lower case.
Reverse the order of words from the input.
Note: You will have to handle multiple spaces, and leading/trailing spaces.

For example:

"Example Input" ==> "iNPUT eXAMPLE"
You may assume the input only contain English alphabet and spaces.

-string - only letters and spaces - no funny business
- return - new string changing case of every letter - and order of words reversed
- 
*/

function stringTransformer(str) {
  // turn string into an array of letters ['h','e', 'l', etc...] x
  // map through arr and change uppercase letters to lowercase
  // turn array back to string and then turn it back into array which now has the casing transformation ['bOB hELLO']
  // reverse the array 
//   turn back to string using .join
  let test = []
  const stringArr = str.split("")
  const transformedStr = stringArr
    .map((word) => {
      return word === word.toUpperCase()
        ? word.toLowerCase()
        : word.toUpperCase()
    })
    .join("")
    .split(" ")
    .reverse()
    .join(" ")

  return transformedStr
}

console.log(stringTransformer("Hello Bob"), "bOB hELLO")
console.log(stringTransformer("Example Input"), "iNPUT eXAMPLE")
