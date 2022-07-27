/* 

Fellow code warrior, we need your help! We seem to have lost one of our sequence elements, and we need your help to retrieve it!

Our sequence given was supposed to contain all of the integers from 0 to 9 (in no particular order), but one of them seems to be missing.

Write a function that accepts a sequence of unique integers between 0 and 9 (inclusive), and returns the missing element.

Examples:
[0, 5, 1, 3, 2, 9, 7, 6, 4] --> 8
[9, 2, 4, 5, 7, 0, 8, 6, 1] --> 3

P: function takes in an array ( 0 - 9 numbers)
R: function returns a number (the number that's missing in the sequence)
E: [0, 5, 1, 3, 2, 9, 7, 6, 4] --> 8 ( 8 is the missing number)
P: see inside the function
*/

function getMissingElement(superImportantArray){
    //TODO
    //loop through the array
    // use indexOf to find if the element exists (if not it will equal -1)
    // if it equals -1 return i
    for (i = 0; i < 10; i++) {
        if (superImportantArray.indexOf(i) === -1) return i;
      }
}

/* 
conditions for the first test: [0, 5, 1, 3, 2, 9, 7, 6, 4]
indexOf: 0 = 0
indexOf: 1 = 2
indexOf: 2 = 4
indexOf: 3 = 3 
indexOf: 4 = 8
indexOf: 5 = 1
indexOf: 6 = 7
indexOf: 7 = 6
indexOf: 8 = - 1 (cause its not found)
indexOf: 9 = 5
*/

console.log(getMissingElement([0, 5, 1, 3, 2, 9, 7, 6, 4])) //8
console.log(getMissingElement([9, 2, 4, 5, 7, 0, 8, 6, 1])) //3