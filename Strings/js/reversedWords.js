/* 
    You need to write a function that reverses the words in a given string. A word can also fit an empty string. If this is not clear enough, here are some examples:

As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.

Example (Input --> Output)

"Hello World" --> "World Hello"
"Hi There." --> "There. Hi"

P: function takes string (more than 1)
R: returns the strings reversed
E: "Hello World" --> "World Hello"
P: - put strings into an array
    - reverse the array
    - join strings in the array based on a space 
    

*/

function reverse(string){
    //your code here
    return string.split(' ').reverse().join(' ')
  }

  console.log(reverse('Hello World'))//World Hello