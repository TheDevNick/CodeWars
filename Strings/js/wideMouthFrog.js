/* 
The wide-mouth frog is particularly interested in the eating habits of other creatures.

He just can't stop asking the creatures he encounters what they like to eat. But, then he meets the alligator who just LOVES to eat wide-mouthed frogs!

When he meets the alligator, it then makes a tiny mouth.

Your goal in this kata is to create complete the mouth_size method this method takes one argument animal which corresponds to the animal encountered by the frog. If this one is an alligator (case-insensitive) return small otherwise return wide

P: function takes one arg which is animal 
R: if alligator, return small , if not , return wide
E: mouthSize(alligator) => small
    mouthSize(rabbit) => wide
P: need a conditional (if statement)
    -if animal is alligator (case-insensitive) , return small, else return wide 


*/

function mouthSize(animal) {
    // code here
    return animal === 'alligator' || animal === 'ALLIGATOR' ? 'small' : 'wide'
  }

  console.log(mouthSize('alligator'))
