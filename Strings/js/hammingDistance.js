/* CHALLENGE
Given two strings of equal length, calculate and return the the hamming distance.
E.g hammingDistance('rover', 'river') // should return 1

- function - takes 2 strings - may have chars and nums - 
- return number 
*/

function hammingDistance(stringA, stringB) {
  // Code goes here
  // check if strings are equal length
  // create a count variable to hold the distance
  // loop through and compare strings
  // return the count (hammingDist) variable

  let count = 0

  if (stringA.length === stringB.length) {
    for (let i = 0; i < stringA.length; i++) {
      if (stringA[i].toLowerCase() !== stringB[i].toLowerCase()) {
        count++
      }
    }
    return count
  } else {
    throw new Error("Strings are not equal in length!")
  }
}

console.log(hammingDistance('nick', 'nock'), 1)
console.log(hammingDistance('nicks', 'nockz'), 2)
console.log(hammingDistance('james', 'jamie'), 2)
