/* 
Write a function to get the first elements of asequence. Passing a parameter n (default=1) will return the first n elements of the sequence.

If n == 0 return an empty sequence []

Examples
first(arr) //=> ['a'];
first(arr, 2) //=> ['a', 'b']
first(arr, 3) //=> ['a', 'b', 'c'];
first(arr, 0) //=> [];
*/
var arr = ['a', 'b', 'c', 'd', 'e']

function first(arr, n = 1) {
  // return arr;
    return arr.slice(0, n)
  }

  console.log(first(['a', 'b', 'c', 'd', 'e']))
