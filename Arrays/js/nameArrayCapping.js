/* 
Create a method that accepts an array of names, and returns an array of each name with its first letter capitalized.

example

capMe(['jo', 'nelson', 'jurie'])     // returns ['Jo', 'Nelson', 'Jurie']
capMe(['KARLY', 'DANIEL', 'KELSEY']) // returns ['Karly', 'Daniel', 'Kelsey']

P: the function takes in an array of names
R: the function returns the array of the first letter of each name capitalized
E: capMe(['jo', 'nelson', 'jurie'])     // returns ['Jo', 'Nelson', 'Jurie']
P: see inside function 
*/

function capMe(names) {
    // we know we will have to loop through the array (use map)
    // get the first character of the string and make it upperCase
    //  concatenate that with the rest of the string using slice
    return names.map(name => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase())

}

console.log(capMe(['jo', 'nelson', 'jurie']))
console.log(capMe(['KARLY', 'DANIEL', 'KELSEY']))