/* 
	
	line 1: the cat is black
	line 2: the dog barks
	
	
	Ex Output:
	
	barks 2
	black 1
	cat 1
	dog 2
	is 1
	the 1, 2
*/




























const outputData = []

function findLineNumbers(arr) {
	arr.forEach((word, lineNumber) => {
		lineNumber++
		const words = word.split(' ').map(text => ({text, lineNumber}))
		outputData.push(...words)
	})
	return outputData.sort((a, b) => (a.text > b.text || -1))
}

console.log(findLineNumbers(["the cat is black", "the dog barks"]))