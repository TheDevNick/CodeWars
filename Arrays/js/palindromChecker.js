/* CHALLENGE
Given a string of text, return true or false indicating whether or not the text is a palindrome.
e.g palindromeChecker('racecar') // will return true

-- palidromeChecker -- string of text -- always be letters (no special chars ) -- may have uppercase letters -- 
-- returning true or false
-- 
*/

// function palindromeChecker(text) {
//   // Code goes here
//   const reversedText = text.split("").reverse().join("").toLowerCase()
//   const isPalindrome = text.toLowerCase() === reversedText
//   // turn text into array
//   // create variable to store the word in reverse
//   // compare original text vs reversed text
//   // return true if they match , false if not
//   return isPalindrome
// }

function palindromeChecker(text) {
  var textLen = text.length
  for (var i = 0; i < textLen / 2; i++) {
    if (text[i] !== text[textLen - 1 - i]) {
        return false
    }
  }
  return true
}

console.log(palindromeChecker("racecar"), true)
console.log(palindromeChecker("bob"), true)
console.log(palindromeChecker("wow"), true)
console.log(palindromeChecker("php"), true)
console.log(palindromeChecker("2002"), true)
