/* 
Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into '#'.

Examples
"4556364607935616" --> "############5616"
     "64607935616" -->      "#######5616"
               "1" -->                "1"
                "" -->                 ""

// "What was the name of your first pet?"

"Skippy" --> "##ippy"

"Nananananananananananananananana Batman!"
-->
"####################################man!"

- the function takes in a string of characters
- the function returns a string masking the last 4 characters
- 
*/

function maskify(cc) {
// turn string into an array
    cc = cc.split("");
// loop through the string length - 4 since we want the last 4 to be actual numbers
    for(var i = 0; i < cc.length - 4; i++){
    // mask all of these values
      cc[i] = "#";
  }
//   since this is currently an array lets use the .join command to turn it back to a string
  cc = cc.join("");
  return cc
  }

console.log(maskify("4556364607935616"), "############5616")
