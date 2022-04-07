/*
At the annual family gathering, the family likes to find the oldest living family member’s age and the youngest family member’s age and calculate the difference between them.

You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0. Return a new array (a tuple in Python) with [youngest age, oldest age, difference between the youngest and oldest age].
*/

/*
PSEUDOCODE:
1. Create a empty array
2. I should sort the array first so it will be easier to get the oldest and youngest family member.
3.Take the youngest age and the oldest age and subtract the youngest age from the oldest age to get the difference.
4. Create variables to hold the youngest (since the array is sorted the youngest in the array will be at index [0]), the oldest , and the difference
5. Push those variables into the empty array you created. 
6. Return the new array.
*/

function differenceInAges(ages){
    const newArr = []
    const sortedArr = ages.sort((a,b) => a - b)
    const youngest = sortedArr[0]
    const oldest = sortedArr[sortedArr.length - 1]
    const difference = oldest - youngest 
    newArr.push(youngest, oldest, difference)
    return newArr
}

console.log(differenceInAges([82,15,6,38,35]))//[6, 82, 76]
console.log(differenceInAges([57, 99, 14, 32]))//[14, 99, 85]