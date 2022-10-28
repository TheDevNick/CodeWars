/* 
Given an array of integers , Find the Nth smallest element in this array of integers.

Notes
Array/list size is at least 3 .

Array/list's numbers could be a mixture of positives , negatives and zeros .

Repetition in array/list's numbers could occur , so don't Remove Duplications .

nthSmallest({3,1,2} ,2) ==> return (2) 
nthSmallest({15,20,7,10,4,3} ,3) ==> return (7) 
nthSmallest({15,20,7,10,4,3} ,3) ==> return (7) 
nthSmallest({177,225,243,-169,-12,-5,2,92} ,5) ==> return (92)

*/

function nthSmallest(arr, num) {
    arr = arr.sort((a, b) => a - b)
    // after sorting, the nth smallest number would just be the number in the array that's [nth - 1] since arrays are zero indexed
    return arr[num - 1]// arr[2 - 1 = 1] => arr[1]
}
    






console.log(nthSmallest([1, 2, 3] , 2), 2)
console.log(nthSmallest([3, 4, 7, 10, 15, 20], 3), 7)