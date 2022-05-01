/* 
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F
*/

/* 
    PSEUDOCODE:
    1.break the string into an array so nick hollins would become ['nick', 'hollins'] 
    2. get the first letter of each element in the array 
    3. make the first letter uppercase
    4.return the value
*/

function abbrevName(name){

    // code away
    let split = name.split(' ')
    return `${split[0].charAt(0).toUpperCase()}.${split[1].charAt(0).toUpperCase()}`
}


console.log(abbrevName(`nick hollins`));