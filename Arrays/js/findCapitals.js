/* 
Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

Example
Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

P: functions takes in a single string
R: function returns indexes of all capital letters in the string
E: NiCk => [0,2]
p: - turn the string into a array 
    -  check each letter in the array
    - if the letter in the array is capitlal get the index of it
    - add the index to a array

*/

let capitals = function (word) {
	// Write your code here
    let capitalsArr = []
    let arr = word.split('')
    arr.map(letter => {
        letter === letter.toUpperCase() ? capitalsArr.push(arr.indexOf(letter)): 'not uppercase'
    })

    return capitalsArr
};

console.log(capitals('NiChOlAs'))
