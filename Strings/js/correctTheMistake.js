/* 
Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

S is misinterpreted as 5
O is misinterpreted as 0
I is misinterpreted as 1
The test cases contain numbers only by mistake.
*/

function correct(string) {
	// your code here
   let s = string.split('')
   for(let i = 0; i < s.length; i++) {
    if (s[i] === '0') s[i] = 'O'
    if (s[i] === '5') s[i] = 'S'
    if (s[i] === '1') s[i] = 'I'
   }
   return s.join('')
   
  
}

console.log(correct('5ame'))
console.log(correct('0kay'))
console.log(correct('1nlove'))