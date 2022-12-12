/* 
 you will be given an array of integers whose elements have both a negative and a positive value, except for one integer that is either only negative or only positive. Your task will be to find that integer.

Examples:

[1, -1, 2, -2, 3] => 3

3 has no matching negative appearance

[-3, 1, 2, 3, -1, -4, -2] => -4ve appearance

[1, -1, 2, -2, 3, 3] => 3

(the only-positive or only-negative integer may appear more than once)

-- int arr -- never empty -- 
-- return num


*/

function findMissingInt(arr){
    // find element in arr that don't have a negative value
   return arr.find(num => !arr.includes(-num))


}

console.log(findMissingInt([1, -1, 2, -2, 3]), 3)
console.log(findMissingInt([5, -5, 2, -2, 1, 1]), 1)