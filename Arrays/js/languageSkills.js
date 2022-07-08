/* 
You are given a dictionary/hash/object containing some languages and your test results in the given languages. Return the list of languages where your test score is at least 60, in descending order of the results.

Note: the scores will always be unique (so no duplicate values)

examples:
{"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
{"Hindi": 60, "Dutch" : 93, "Greek": 71}  -->  ["Dutch", "Greek", "Hindi"]
{"C++": 50, "ASM": 10, "Haskell": 20}     -->  []

P:function takes in an object
R: function returns an array of languages with the score of at least 60 (desc order)
E: {"Hindi": 60, "Dutch" : 93, "Greek": 71}  -->  ["Dutch", "Greek", "Hindi"] 
P: - get the keys of the object
- run a filter on the keys to see which are greater than 59
- sort the results in desc order using sort function
*/

function myLanguages(results) {
    return Object.keys(results).filter(r => results[r] > 59).sort((a,b) => results[b] - results[a]);
}

console.log(myLanguages({"Java": 10, "Ruby": 80, "Python": 65}))



