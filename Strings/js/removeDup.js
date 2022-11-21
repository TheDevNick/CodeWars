/* 
Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

"alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

--> "alpha beta gamma delta alpha beta gamma delta"

-- str -- never empty
--return new string

*/

const removeConsecutiveDuplicates = (str) => {
    const strArr = str.split(' ')
    const result = []
    for(let i = 0; i < strArr.length; i++){
        if(strArr[i] !== strArr[i + 1]){
            result.push(strArr[i])
        }
    }
    return result.join(' ')
}

console.log(
  removeConsecutiveDuplicates(
    "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"
  ),
  " | alpha beta gamma delta alpha beta gamma delta"
)


