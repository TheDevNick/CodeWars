/* 
You love coffee and want to know what beans you can afford to buy it.

The first argument to your search function will be a number which represents your budget.

The second argument will be an array of coffee bean prices.

Your 'search' function should return the stores that sell coffee within your budget.

The search function should return a string of prices for the coffees beans you can afford. The prices in this string are to be sorted in ascending order.

-- function - takes in budget(number) and array of prices
- returns string of prices within budget
- 10 , [5, 6 , 7 , 15, 20] => '5, 6, 7'
- 
*/

function search(budget, prices) {
    //filter array for elements thats less than the budget number
    const coffeeWithinBudget = prices.filter(price => price <= budget).sort((a, b) => a - b).join(',')
    return coffeeWithinBudget
}

console.log(search(3, [6, 1, 2, 9, 2]), " | 1,2,2")
console.log(search(10, [5, 6, 7, 15, 20]), " | 5,6,7")
console.log(search(14, [7, 3, 23, 9, 14, 20, 7]), " | 3,7,7,9,14")