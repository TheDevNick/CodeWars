/* 
Complete the keysAndValues function so that it takes in an object and returns the keys and values as separate arrays.

Example:

keysAndValues({a: 1, b: 2, c: 3}) // should return [['a', 'b', 'c'], [1, 2, 3]]

P: function takes in an object
R: function returns an array with two arrays within it, one for the keys in the object and one for the value of the keys
E: see above
P: - get the object.keys and the object.values and put it in an array (and return that array)
*/

function keysAndValues(data){
    // TODO: complete
    return [Object.keys(data), Object.values(data)]
  }

  console.log(keysAndValues({a: 1, b: 2, c: 3}))