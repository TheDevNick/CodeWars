/* 
It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

Return the average of the given array rounded down to its nearest integer.

The array will never be empty.
-- function takes in an array of numbers -- never will be empty -- no negatives -- 
-- return the average of the arr rounded to nearest int


*/

function findAvg(arr) {
    const arrLength = arr.length
    const sum = arr.reduce((acc, sum) => acc + sum, 0)
    return Math.floor(sum / arrLength)

}

console.log(findAvg([10, 20, 30, 10, 5]), 15)