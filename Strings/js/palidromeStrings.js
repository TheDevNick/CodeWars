/* 
A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. This includes capital letters, punctuation, and word dividers.

Implement a function that checks if something is a palindrome. If the input is a number, convert it to string first.

Examples
isPalindrome("anna")   ==> true
isPalindrome("walter") ==> false
isPalindrome(12321)    ==> true
isPalindrome(123456)   ==> false

P: function takes in word, phrase, number, or other sequence of characters
R: function returns a boolean
E: isPalindrome("anna")   ==> true
P: - if the sequence is the same reversed return true
    - turn everything into a string if it is not already (so we can use the array methods)
*/

function isPalindrome(line) {
    let str = String(line)
    let arr = str.split('')
    return arr.join('') === arr.reverse().join('')
  }

  console.log(isPalindrome('walter'))

