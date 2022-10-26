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
    word = word.toLowerCase()
    const vowels = ['a', 'e', 'i', 'o', 'u']
    let vowelIndex = 0
    const wordArray = word.split('')//['p', 'i', 'g']
    // if the word starts with a vowel, then just add 'way' to the end of it
    if (vowels.includes(word[0])) {
        return word + 'way'
    } else {
        // if the first letter in word is not a vowel 
        for (let letter of word) {
            // loop through until the first vowel is found
            if (vowels.includes(letter)) {
                vowelIndex = word.indexOf(letter)// if word is 'Nick' then vowelIndex would be 1
                break;
            }
        }
    }
    // final string
    return word.slice(vowelIndex) + word.slice(0, vowelIndex) + "ay"
}

console.log(translateToPigLatin('pig'), 'igpay')
console.log(translateToPigLatin('nick'), 'icknay')
console.log(translateToPigLatin('explain'), 'explainway')
console.log(translateToPigLatin('glove'), 'oveglay')