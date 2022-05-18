/* 
write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.

the string should start with a 1.

a string with size 6 should return :'101010'.

with size 4 should return : '1010'.

with size 12 should return : '101010101010'.

The size will always be positive and will only use whole numbers.


P: function takes a size
R: string (of alternating '1s' and '0s')
E: stringy(6) => '101010'
    stringy(4) => '1010'
P:  -use a for loop 
    -if the index is even add 0 to the string , if its odd add a 1 to the string

*/

function stringy(size) {
    // your code here 
    let str = ''
    for (let i = 1; i <= size; i++) {
        if (i% 2 === 0){
            str += "0"
        } else {
            str += "1"
        }
    }
    return str
 }

  console.log(stringy(10))