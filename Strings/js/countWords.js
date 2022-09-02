/* 
Can you implement a function that will return number of words in a string?

You have to ensure that spaces in string is a whitespace for real.

Let's take a look on some examples:

countWords("Hello"); // returns 1 as int
countWords("Hello, World!") // returns 2
countWords("No results for search term `s`") // returns 6
countWords(" Hello") // returns 1

--function takes in a string
-- function returns number of words in that string
--- countWords("Hello"); // returns 1 as int
*/


function countWords(words) {
    // put the words into an array and count the array length
    return words.split(' ').length
}

console.log(countWords('Hello, World!'), 2)