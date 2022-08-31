/* 
An AI has infected a text with a character!!

This text is now fully mutated to this character.

If the text or the character are empty, return an empty string.
There will never be a case when both are empty as nothing is going on!!

Note: The character is a string of length 1 or an empty string.

Example
text before = "abc"
character   = "z"
text after  = "zzz"

- function takes in text and a character as input. 
- functio returns string that consist of the character that was in the input
- see example  above
- see function body

*/

function contamination(text, char) {
    // Code here ;)
    return char.repeat(text.length)
  }

  console.log(contamination("abc", "z"), "zzz")
  console.log(contamination("", "erq"), "")