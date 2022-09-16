// capitalize(‘a short sentence’) → ‘A Short Sentence’
let sentence = "a short sentence";
//capitalize(‘a lazy fox’) → ‘A Lazy Fox’
let sentence = "a lazy fox";
// capitalize(‘look, it is working!’) → ‘Look, It Is Working!’
let sentence = "look, it is working!";

^^^^^^ same from here ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
let temp;
for (let x = 0; x < sentence.length; x++) {
  if (x === 0) {
    temp = sentence[0].toUpperCase();
  } else if (sentence[x - 1] === " ") {
    temp = temp + sentence[x].toUpperCase();
  } else temp = temp + sentence[x];
}
console.log(temp);


