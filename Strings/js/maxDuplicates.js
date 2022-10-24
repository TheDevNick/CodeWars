const numMap = {}
let frequency = 0
let maxNum = 0

function findMaxDup(arr){

    for (let num of arr) {
        Object.hasOwn(numMap, numMap[num]) ? numMap[num]++ : numMap[num] = 1
    }

    for (let num in numMap){
        if (numMap[num] > frequency) {
            frequency = numMap[num]
            maxNum = num
        }
    }

    return maxNum
}

console.log(findMaxDup([1, 2, 2]), 2)