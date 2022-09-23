// tutorial info

const items = [
    {name: 'Bike', price: 100},
    {name: 'Bike', price: 800, sale: 500},
    {name: 'TV', price: 200},
    {name: 'Album', price: 10},
    {name: 'Book', price: 5},
    {name: 'Phone', price: 500},
    {name: 'Computer', price: 1000},
    {name: 'Keyboard', price: 25},
]

// use .filter() items that are less than or equal to $100
const lessThan100 = items.filter(item => item.price <= 100) //doesnt change the original array and finds all occurences unlike find
// console.log(lessThan100)

// use .map() to get the name of every item
const itemNames = items.map(item => item.name) // creates new array
// console.log(itemNames)

// use .find() a single item in the array
const findAItem = items.find(item => item.name === 'Bike')// finds the first occurence
// console.log(findAItem)

// use .forEach() to print out all of the item prices and names ex: itemName: itemPrice => Bike: 100
items.forEach((item, index) => console.log(`${item.name}: ${item.price}`)) //this does not return anything


// use .some() to find if some of the items in array has a price less than 100
const someLessThan100 = items.some(item => item.price < 100)// if a single item returns true it will return true for the whole thing
// console.log(someLessThan100)

// use .every() to find if every item in the array is less than 100
const isAllItemsUnder100 = items.every(item => item.price < 100)// all items must be under 100 for it to return true
// console.log(isAllItemsUnder100)

// use .reduce() to get total price of all items in the array
const totalItemPrice = items.reduce((prev, current) => {
    return current.price + prev
}, 0)
console.log(totalItemPrice)

// use .includes to see if a price has the value of 100
const prices = [100, 200, 300]
const includes100 = prices.includes(200)
console.log(includes100)