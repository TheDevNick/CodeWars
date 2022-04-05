/*
Return a new array consisting of elements which are multiple of their own index in input array (length > 1).

Some cases:

[22, -6, 32, 82, 9, 25] => [-6, 32, 25]

[68, -1, 1, -7, 10, 10] => [-1, 10]

[-56,-85,72,-26,-14,76,-27,72,35,-21,-67,87,0,21,59,27,-92,68] => [-85, 72, 0, 68]

*/

/*
PSEUDOCODE
claryfing:
- if the element at the index is a multiple of the index return it in the array
- example [1, 2, 9] => [2]
- if the elelment is divisible by the index then it is a multiple of that index? 
logic: 
1. I know i am returning a new array
2. I could use the array filter method or I could just use a for loop
3. loop through the the elements
4. If the element is divisible by the index then add that element to the new array
*/

function multipleOfIndex(array) {
    let newArr = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] % i === 0 ) {
            newArr.push(array[i])
        }
    }
    return newArr
}
// function multipleOfIndex(array) {
//     return array.filter((num, i) => num % i === 0);
//   }
console.log(multipleOfIndex([22, -6, 32, 82, 9, 25]));
console.log(multipleOfIndex([1, 2, 9]));