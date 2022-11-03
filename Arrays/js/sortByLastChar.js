/* 

Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

All inputs will be valid.

-- stringOfWords -- all inputs valid -- always a string 
-- return array sorted alphabetically by the final char -- if same last letter, show them in order they appear in string
--


*/

function last(stringOfWords) {
    // turn string into array
    const strArray = stringOfWords.split(' ')
    // sort the array based on last character
    const sortStrArray = strArray.sort((wordA, wordB) => wordA.charCodeAt(wordA.length - 1)  - wordB.charCodeAt(wordB.length - 1) )
    // const sortStrArray = strArray.sort((wordA, wordB) => {
    //     if (wordA[wordA.length -1] > wordB[wordB.length - 1]){
    //         return 1
    //     } else if (wordA[wordA.length -1] < wordB[wordB.length - 1]) {
    //         return -1
    //     }
    //     return 0
    // })
    return sortStrArray
}

console.log(last("man i need a taxi up to ubud"), ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up'] )
console.log(last("this have been cool"), ['have', 'cool', 'been', 'this'])
console.log(last('a love dad has'), ['a', 'dad', 'love', 'has'])


