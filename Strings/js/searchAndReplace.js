/* 
Receiving a sentence, a word in the sentence and a replacement for that word as arguments, perform a search and replace on the sentence using the arguments provided and return the new sentence. E.g

searchReplace("He is Sleeping on the couch", "Sleeping", "sitting") 
// should return "He is Sitting on the couch"

Note: Make sure to match the casing(capitalization) of the string to be replaced as shown above.

-- sentece - word - replacement - the replacement word needs to start with capital letter
-- returning new sentence

*/

function searchReplace(sentence, word, replacement) {
//use the replace method
// capitalize the first letter of word using toUpperCase
const replacementWord = replacement[0].toUpperCase() + replacement.slice(1)
const replaced = sentence.replace(word, replacementWord)

return replaced
}

console.log(searchReplace('Nick is fun', 'fun', 'cool'), ' |  Nick is Cool')
console.log(searchReplace("He is Sleeping on the couch", "Sleeping", "sitting"), ' |  He is Sitting on the couch')