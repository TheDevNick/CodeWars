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
let plainObj = {
    arr1: ['the cat is black'],
    arr2: ['the dog barks']
}
function findElementLines(obj) {
    return plainObj.arr1
}

console.log(findElementLines(plainObj))