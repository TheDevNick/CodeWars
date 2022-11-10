function isVow(array) {
  const vowels = ["a", "e", "i", "o", "u"]

    for (let i =0; i < array.length; i++) {
        const char = String.fromCharCode(array[i])
        if(vowels.includes(char)) {
            char = array[i]
        }
    }
    return array
}

console.log(isVow(['n', 'i', 'c', 'k']))