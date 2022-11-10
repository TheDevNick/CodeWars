// reverse string 
function reverseString(str){
  let result = ""
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i]
  }
  return result
  //str.split('').reverse().join('')
}
// console.log(reverseString('nick'), 'kcin')

function isPalidrome(str) {
    return str.split('').reverse().join('') ===  str 
}
// console.log(isPalidrome('nick'), 'false')
// console.log(isPalidrome('racecar'), 'true')

function mostCommonInt(arr){
    const numMap = {}
    let frequency = 0
    let mostCommonInt = 0

    for(let num of arr) {
        if (Object.hasOwn(numMap, num)){
            numMap[num]++
        } else {
            numMap[num] = 1
        }
    }

    for (let num in numMap) {
        if(numMap[num] > frequency){
            frequency = numMap[num]
            mostCommonInt = num
        }
    }
 return mostCommonInt
}
// console.log(mostCommonInt([1, 1, 2, 3, 4, 4, 4, 4, 5]), 4)
// console.log(mostCommonInt([1, 4, 8, 2, 1, 7, 4, 1]), 1)

