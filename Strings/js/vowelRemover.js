/* 
Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

Examples
"hello"     -->  "hll"
"codewars"  -->  "cdwrs"
"goodbye"   -->  "gdby"
"HELLO"     -->  "HELLO"
don't worry about uppercase vowels
y is not considered a vowel for this kata

P: function will take a string
R: string will be returned with no lowercase vowels (a, e, i, o, u )
E: "goodbye"   -->  "gdby"
P: - find out if any vowels exist
- remove the vowels

*/

function shortcut (string) {
   return string.replace(/[aeiou]/g, '')
}

console.log(shortcut('hello'))