/* 
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

-- so the function takes in a string (word)
-- the function also returns a boolean
-- if the word has no repeating letter then it is a isogram

-- Example: 'Nick' => returns true because it is a isogram
*/

function isIsogram(str) {
  //turn the string into an array
  const arr = str.split("")
  // loop through the array
    for(let i = 0; i < arr.length - 1; i++) {
        // check if any of the letters is equal to another
        console.log(arr[i], arr[i + 1])
        if (arr[i] === arr[i + 1 ]){
            return false
        }
    }

    return  true
}

console.log(isIsogram('Nick'))
