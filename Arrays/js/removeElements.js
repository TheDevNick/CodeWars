/* 
Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

Example:
["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

None of the arrays will be empty, so you don't have to worry about that!

--function takes in an array 
-- function returns array with every second element removed
-- 

*/

function removeElements(arr) {
  // create an empty arr

  // loop through the array and add every odd element to the empty array

  const newArr = []
  for (let i = 0; i < arr.length; i+=2) {
    newArr.push(arr[i])
  }
  return newArr
}

console.log(removeElements(["Keep", "Remove", "Keep", "Remove", "Keep"]), [
  "Keep",
  "Keep",
  "Keep",
])
