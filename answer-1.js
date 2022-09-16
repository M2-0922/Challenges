// capitalize(‘a short sentence’) → ‘A Short Sentence’
let sentence = "a short sentence";
let temp;
for (let x = 0; x < sentence.length; x++) {
  if (x === 0) {
    temp = sentence[0].toUpperCase();
  } else if (sentence[x - 1] === " ") {
    temp = temp + sentence[x].toUpperCase();
  } else temp = temp + sentence[x];
}
console.log(temp);

//capitalize(‘a lazy fox’) → ‘A Lazy Fox’
sentence = "a lazy fox";
temp = "";
for (let x = 0; x < sentence.length; x++) {
  if (x === 0) {
    temp = sentence[0].toUpperCase();
  } else if (sentence[x - 1] === " ") {
    temp = temp + sentence[x].toUpperCase();
  } else temp = temp + sentence[x];
}
console.log(temp);

// capitalize(‘look, it is working!’) → ‘Look, It Is Working!’
sentence = "look, it is working!";
temp = "";
for (let x = 0; x < sentence.length; x++) {
  if (x === 0) {
    temp = sentence[0].toUpperCase();
  } else if (sentence[x - 1] === " ") {
    temp = temp + sentence[x].toUpperCase();
  } else temp = temp + sentence[x];
}
console.log(temp);
