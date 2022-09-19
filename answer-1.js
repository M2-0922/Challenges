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
console.log(capitalize("look, it is working!"));
