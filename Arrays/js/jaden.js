/* 
Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

Example:

Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

P: the function will take in a string
R: the function will return the string with the first letter of every word capitalized
E: "How Can Mirrors Be Real If Our Eyes Aren't Real"
P: - put each word in the sentence string into a array
    - map through the array and capitalize the first letter in each word in the array
*/

    function toJadenCase(str) {
        const arr = str.split(' ')
        const capitalized = arr.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        return capitalized.join(' ')
    }

    console.log(toJadenCase('i think i got it working!'))
