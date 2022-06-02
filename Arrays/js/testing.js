/* 
Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

Write a function which takes a list of strings and returns each line prepended by the correct number.

The numbering starts at 1. The format is n: string. Notice the colon and space in between.

Examples:

number([]) // => []
number(["a", "b", "c"]) // => ["1: a", "2: b", "3: c"]

P: function takes an array of strings
R: function returns each line prepended by the correct number (starting at 1)
E: number(["a", "b", "c"]) // => ["1: a", "2: b", "3: c"]
P: - map through the array maybe? then append number: after each string (letter in this case)
*/

let number = function(array){
    //your awesome code here
    return array.map((str, i) => {
        return `${i + 1}: ${str}`
    })
  }

  console.log(number(["a", "b", "c"]))