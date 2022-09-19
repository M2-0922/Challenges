/*

Please put your code under this comment block. You can try your logic
Then you can add this file to staged area for commit and push to your own Branch ({your-name-with-dash})

*/

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
