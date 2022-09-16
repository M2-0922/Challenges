function capitalize(str) {
  let arr = str.split(" ");
  let sentence;

  for (let x = 0; x < arr.length; x++) {
    sentence = arr[x];
    arr[x] = sentence[0].toUpperCase() + sentence.slice(1);
  }
  console.log(arr.join(" "));
}

capitalize("a short sentence");
capitalize("a lazy fox");
capitalize("look, it is working!");
