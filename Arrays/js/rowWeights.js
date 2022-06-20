/* 
Several people are standing in a row divided into two teams.
The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.

Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.

P: the function takes a array with positive integers
R: function returns array with two numbers
E: rowWeights([13, 27, 49])  ==>  return (62, 27)
P: - the odd indexes is team 1 and the even indexes is team 2
 - sum the total of the odd indexes and sum the total of even indexes
 - return both sums in a array
*/

function rowWeights(array){
    let sum1 = 0
    let sum2 = 0
    for (let i = 0; i < array.length; i++) {
        if (i % 2 !== 0) {
            sum1 += array[i]
        }
        if (i % 2 === 0) {
            sum2 += array[i]
        }
    }
    return [sum2, sum1]
  }

console.log(rowWeights([13, 27, 49]))