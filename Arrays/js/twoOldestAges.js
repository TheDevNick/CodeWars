/* 
The two oldest ages function/method needs to be completed. It should take an array of numbers as its argument and return the two highest numbers within the array. The returned value should be an array in the format [second oldest age, oldest age].

The order of the numbers passed in could be any order. The array will always include at least 2 items. If there are two or more oldest age, then return both of them in array format.

For example (Input --> Output):

[1, 2, 10, 8] --> [8, 10]
[1, 5, 87, 45, 8, 8] --> [45, 87]
[1, 3, 10, 0]) --> [3, 10]

P: function takes in a array of numbers
R: function returns the two highest numbers in the array
E: [1, 2, 10, 8] --> [8, 10]
P: - sort the array 
-  grab the last two elements from the sorted array using slice method
*/

function twoOldestAges(ages){
 let sortedArr = ages.sort((a,b) => a - b)
 
 return sortedArr.slice(-2)
}

console.log(twoOldestAges([1, 2, 10, 8]))