/* 
In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!

Examples:

1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12
The result may contain fives. ;-)
The start number will always be smaller than the end number. Both numbers can be also negative!

P: function takes in a start number and a end number
R: function returns the count (without 5 included)
E: 1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
P: - loop through the range start - end
    - turn i into a string and check if it contains 5
    - if it don't contain 5 increase the count 
*/

function dontGiveMeFive(start, end) {
    let count = 0
  for (let i = start; i <= end; i++) {
        if(!i.toString().includes('5')) {
            count++
        }
  }
  return count
}

console.log(dontGiveMeFive(1, 9))
console.log(dontGiveMeFive(4, 17))