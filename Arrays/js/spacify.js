/* 
Modify the spacify function so that it returns the given string with spaces inserted between each character.

spacify("hello world") // returns "h e l l o   w o r l d"

-- takes in a str -- never empty -- 
--return the str with spaces between each letter

*/

function spacify(str) {
    return str.split('').join(' ')
}

console.log(spacify('hello world'), ' || h e l l o  w o r l d')
console.log(spacify('nick'), ' || n i c k')