function capitalize(str) {
  let arr = str.split(" ");
  let sentence;

  for (let x = 0; x < arr.length; x++) {
    // sentence = arr[x];
    arr[x] = arr[x].charAt(0).toUpperCase() + arr[x].slice(1);
  }
  console.log(arr.join(" "));
}

capitalize("a short sentence");
capitalize("a lazy fox");
capitalize("look, it is working!");

function capitalize(str) {
  // look, it is working!
  var stringArray = str.split(" "); //  ["look,", "it", "is", "working!"]

  for (let i = 0; i < stringArray.length; i++) {
    // 0 =>  ook,  Look,
    // 1 => it
    // 2 => is
    // 3 => working!

    //it = I + t = > It
    //orking = W + orking! => Working!
    stringArray[i] =
      stringArray[i].charAt(0).toUpperCase() + stringArray[i].slice(1);
  }

  //["Look,", "It", "Is", "Working!"]
  // Look, It Is Working!
  return stringArray.join(" ");
}

// look, it is working!
// ["look,", "it", "is", "working!"]
// console.log(capitalize("look, it is working!"));

// Second way (short ans, using replace)==================================================

const capitalize = (t) => t.replace(/(^|\s)[a-z]/g, (a) => a.toUpperCase());
// console.log(capitalize("look, it is working!"));

// Third way (using map)==================================================

function capitalize(str) {
  // Split string into an array of words
  const string = str.split(" ");
  const cased = [];

  // Convert every first letter to uppercase
  // Map, `map` is built-in method in javascript for iterate your array...
  string.map((word) => {
    cased.push(word[0].toUpperCase() + word.slice(1).toLowerCase());
  });

  // Convert my words array to a string with .join()
  return cased.join(" ");
}
function capitalize(str) {
  return str
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}
