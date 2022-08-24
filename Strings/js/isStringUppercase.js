/* 
Is the string uppercase?
Task
Create a method to see whether the string is ALL CAPS.

Examples (input -> output)
"c" -> False
"C" -> True
"hello I AM DONALD" -> False
"HELLO I AM DONALD" -> True
"ACSKLDFJSgSKLDFJSKLDFJ" -> False
"ACSKLDFJSGSKLDFJSKLDFJ" -> True

In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS.

- the function takes in a string
    - uppercase, lowercase, or mix of both
- function returns a boolean
- "hello I AM DONALD" -> False , "HELLO I AM DONALD" -> True

*/

function isCap(str) {
    // turn the string into array
    let strArr = str.split('')
    // loop through array 
    for (let i =0; i < strArr.length; i++) {
        // check if any letter is capital
        if (strArr[i] === strArr[i].toUpperCase()) {
            return true
        } else {
            return false
        }
    }
}


console.log(isCap("ACSKLDFJSGSKLDFJSKLDFJ"), true)
console.log(isCap("asdfLDFJSGSKLDFJSKLDFJ"), false)
console.log(isCap("1222@##"), true)