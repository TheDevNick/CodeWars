/* 
The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.

The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).

If the score < 0, return 0.

For example:

checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6
checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]) → 7
checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) → 16
checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]) → 0

P: function takes in 2 arrays
R: function returns a number (the score)
E: checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6 (4 - 1 + 4 - 1 = 6)
P: - create a variable to hold the score
    - loop through 1st array and compare it with the 2nd array
    - while looping through, do grading logic (+4, -1, +0 (for empty strings in array))
 */

function checkExam(array1, array2) {
    // good luck
    let score = 0
    for (let i = 0; i < array1.length; i++) {
        if(array1[i] === array2[i]){
            score += 4
        } else if (array2[i] === "") {
            score += 0
        } else {
            score -= 1
        }

        if (score < 0) {
            score = 0
        }
    }
    return score
   }

   let solution = checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""])
   console.log(solution)