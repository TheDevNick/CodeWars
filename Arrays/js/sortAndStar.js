/*
You will be given a vector of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

The returned value must be a string, and have "***" between each of its letters.

You should not remove or add elements from/to the array.
*/

/*
PSEUDOCODE
1. You will need to sort the array based on ASCII values (in this case you can just use the regular sort method)
2. Create a variable to hold the first word in the sorted array
3. turn that word into an array of characters(split) and then join them with the stars (***)
4. return the value from the previous step (step 3)
*/




function twoSort(s) {
    let sortedASCII =  s.sort()
    let firstWord = sortedASCII[0]//angels
    let arrword = firstWord.split('').join('***')
    return arrword
  }

  console.log(twoSort(['bitcoin', 'angels', 'demons', 'god']));
