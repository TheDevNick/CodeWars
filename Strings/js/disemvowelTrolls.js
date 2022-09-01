/* 
Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.

- the function takes in a string
- the function returns the str without vowels
- "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
*/
function disemvowel(str) {
    // put  vowels in an array
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    // turn string into an array
    // filter through and return only the letters that is not vowels and then join the string
    return str.split('').filter(el => vowels.indexOf(el.toLowerCase()) == -1).join('');
  }

  console.log(disemvowel('This website suck!'), 'Ths wbst sck!')


  function removeNick(str) {
    const name = ['n', 'i', 'c', 'k']
    return str.split('').filter(letter => name.indexOf(letter.toLowerCase()) === -1).join('')

  }

  console.log(removeNick('Nick ate the food!'),'ate the food!')