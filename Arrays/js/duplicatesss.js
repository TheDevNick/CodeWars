/* 
	
	the cat is black
	the dog barks
	
	
	Ex Output:
	
	barks 2
	black 1
	cat 1
	dog 2
	is 1
	the 1, 2
*/




const data = ["the foo is black", "the bar barks"]

let output = []

data.forEach((word, line) => {
  line++ // because line numbers start from 1
  // split into words and include line number
  const words = word.split(" ").map(text => ({text, line,}))
  output.push(...words)
})

// sort alphabetically
// output = output.sort((a, b) => b - a)

console.log("Data sorted alphabetically with line numbers:", output)

