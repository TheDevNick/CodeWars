/* 
Create a method sayHello/say_hello/SayHello that takes as input a name, city, and state to welcome a person. Note that name will be an array consisting of one or more values that should be joined together with one space between each, and the length of the name array in test cases will vary.

Example:

sayHello(['John', 'Smith'], 'Phoenix', 'Arizona')
This example will return the string Hello, John Smith! Welcome to Phoenix, Arizona!

-function will take a name, city, and state (name will be an array of one or more values)
- function will return a string greeting the named person to the city and state
 - see below for test cases   
*/

function sayHello(array, city, state){
    // handle names in the array
    const names = array.join(' ')
    return `Hello, ${names}! Welcome to ${city}, ${state}`

}

console.log(sayHello(['John', 'Smith'], 'Phoenix', 'Arizona'), 'Expected:', "Hello, John Smith! Welcome to Pheonix, Arizona")
console.log(sayHello(['Nick', 'Hollins'], 'Phoenix', 'Arizona'), "Hello, Nick Hollins! Welcome to Pheonix, Arizona")
console.log(sayHello(['John', 'Johnson'], 'Dallas', 'Texas'), "Hello, John Johnson! Welcome to Dallas, Texas")