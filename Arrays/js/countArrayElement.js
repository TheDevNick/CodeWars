/* 
Write a function that takes an array and counts the number of each unique element present.

count(['james', 'james', 'john']) 
#=> { 'james': 2, 'john': 1}

P: function takes in an array
R: function returns an object with a count of unique elements present
E: count(['james', 'james', 'john']) => { 'james': 2, 'john': 1}
P: see function
*/

function count(array){
    // create an empty object
    let counter = {};
//   loop through the array
    for (let i=0; i<array.length; ++i)
    {
        // if the element is undefined then set the element count as 1 else increment the count by 1
      if (counter[array[i]] == undefined)
        counter[array[i]] = 1;
      else
        counter[array[i]] ++;
    }
    
    return counter;
  }

  console.log(count(['james', 'james', 'john']))