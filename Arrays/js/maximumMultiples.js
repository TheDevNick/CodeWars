/* 
Given a Divisor and a Bound , Find the largest integer N , Such That ,

Conditions :
N is divisible by divisor

N is less than or equal to bound

N is greater than 0.

P: function will take in a divisor and a bound (both integers)
R: returns a integer thats divisible by the divisor, <= the bound, and greater than 0
P: - use a for loop starting at divisor up to (including) bound
    - find largest number that is divisible by divisor and push that into a empty array
    -return the max number in that array
*/

function maxMultiple(divisor, bound){
    let arr = []
    for (let i = divisor; i <= bound; i++) {
        // (2, 7) => largest num divisible by 2 is 6
        if(i % divisor === 0) arr.push(i)
         
    }
    return Math.max(...arr)
  }

  console.log(maxMultiple(2,7))//6