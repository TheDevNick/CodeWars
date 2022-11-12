/* 

Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]


- 2 lists(arrays) - always numbers, always positive - never empty
- return array that has all nums from list b removed from list a

*/



// filter listA and return all nums that is not in listB
const arrayDiff = (listA, listB) => listA.filter((num) => !listB.includes(num))

console.log(arrayDiff([1, 2, 2, 2, 3], [2]), [1, 3])
console.log(arrayDiff([1, 2], [1]), [2])
console.log(arrayDiff([1, 2], [1, 2]), [])
console.log(arrayDiff([1, 2, 0, 1], [1]), [2,0])