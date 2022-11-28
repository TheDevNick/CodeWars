/* 
Our fruit guy has a bag of fruit (represented as an array of strings) where some fruits are rotten. He wants to replace all the rotten pieces of fruit with fresh ones. For example, given ["apple","rottenBanana","apple"] the replaced array should be ["apple","banana","apple"]. Your task is to implement a method that accepts an array of strings containing fruits should returns an array of strings where all the rotten fruits are replaced by good ones.

Notes
If the array is null/nil/None or empty you should return empty array ([]).
The rotten fruit name will be in this camelcase (rottenFruit).
The returned array should be in lowercase.

-- string arr -- no numbers -- could be empty -- 
-- return string arr -- return [] if empty


*/

function removeRotten(bagOfFruits) {
//   if (bagOfFruits) {
//     for (let i = 0; i < bagOfFruits.length; i++) {
//       if (bagOfFruits[i].startsWith("rotten")) {
//         bagOfFruits[i] = bagOfFruits[i].slice(6).toLowerCase()
//       }
//     }
//     return bagOfFruits
//   } else {
//     return []
//   }
    return bagOfFruits ? bagOfFruits.map(fruit => fruit.replace('rotten', '').toLowerCase()): [] 
}

console.log(removeRotten(["apple", "rottenBanana", "apple"]), ["apple", "banana", "apple"])