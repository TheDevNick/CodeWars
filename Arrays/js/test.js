/* 
array methods
*/

// splice
let arr1 = ['I', 'love', 'js']
const js = arr1.splice(2, 1)
const love = arr1.splice(1, 1)
// console.log(arr1)
// console.log(js)
// console.log(love)

// slice
let arr2 = ['n', 'i', 'c', 'k']
// console.log(arr2.slice(0,1))

// concat
let arr3 = [1,2,3]
// add 4, 5
// console.log(arr3.concat(4,5))

// tutorial

let arr4 = ['nick', 'hollin', 'aquile']

arr4.forEach(name => console.log(name))


let users = [
  { id: 1, name: "John" },
  { id: 1, name: "John" },
  { id: 2, name: "Pete" },
  { id: 3, name: "Mary" },
]


const john = users.filter((user) => user.id === 1)
const usersUnder5 = users.filter((user) => user.name.startsWith('p'.toUpperCase()))
// console.log(john)
// console.log(usersUnder5)

// map
let workers = ['Nick', 'Lex', 'Lani', 'Jon']

const workersNameLengths = workers.map(item => item.length)
console.log(workersNameLengths)

let newPeople = 'jake, john, james'
let myArrr = newPeople.split(', ')
for (const name of myArrr) console.log(name)

const testArr = ['bulls', 'wizards', 'nets']

const newStr = testArr.join('!')
console.log(newStr)

// reduce
let ages = [1, 2, 5, 10]
let ageSum =  ages.reduce((acc, curr) => acc + curr,0)
console.log(ageSum)
