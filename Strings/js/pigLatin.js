/* 
Translate the provided string to Pig Latin by following the rules below:

For words that begin with consonant sounds, the consonant before the initial vowel should be moved to the end of the word sequence and "ay" affixed. E.g
"pig" = "igpay"
For words that begin with consonant clusters, the clusters should be moved to the end of the word sequence and "ay" affixed. E.g
"glove" = "oveglay"
For words that begin with vowel sounds, simply add "way" to the end of the word. E.g
"explain" = "explainway”

-- function -- takes in word -- if 1st letter of word is consonant, move to end of the word and add 'ay' -- 
-- return new word in pigLatin

*/

function translateToPigLatin(word) {
    // create an array for vowels
    // check if word starts with vowel or consonant
    // based on that, make the translation

    const vowels = ['a', 'e', 'i', 'o', 'u']
    const wordArray = word.split('')//['p', 'i', 'g']
    if (vowels.includes(word[0])) {
        return word + 'way'
    }
}

// console.log(translateToPigLatin('pig'), 'igpay')
// console.log(translateToPigLatin('nick'), 'icknay')
console.log(translateToPigLatin('explain'), 'explainway')
// console.log(translateToPigLatin('glove'), 'oveglay')