/* 
    Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'

P: -function takes a string (one word)
R: returns a reversed string
E: 'word'   =>  'drow'
P: - turn string into a array
- .split the string 
- .reverse the string 
- .join the string
*/

function solution(str){
  return str.split('').reverse().join('')
}

console.log(solution('word'))