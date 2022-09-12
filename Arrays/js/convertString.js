/* 
Write a function to split a string and convert it into an array of words.

Examples (Input ==> Output):
"Robin Singh" ==> ["Robin", "Singh"]

"I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]

-- function takes in an string of words
-- function returns an array of the words in the sentence
-- "nick hollins" => ['nick', 'hollins']
*/

function stringToArray(str) {
    // split the string into an array
    return str.split(' ')
}

console.log(stringToArray("I love arrays they are my favorite"), [
  "I",
  "love",
  "arrays",
  "they",
  "are",
  "my",
  "favorite",
])


