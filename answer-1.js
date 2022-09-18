/*

Please put your code under this comment block. You can try your logic
Then you can add this file to staged area for commit and push to your own Branch ({your-name-with-dash})

*/

let cap = function(strings) {
  const arr = strings.split(/\s/);

  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
  }
  console.log(arr.join(" "));
}

// a short sentence
cap("a short sentence");
// a lazy fox
cap("a lazy fox");
// look, it is working!
cap("look, it is working!");
