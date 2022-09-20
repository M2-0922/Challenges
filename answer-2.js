/*# Hollow Pyramid Star Pattern

```
    *
   * *
  *   *
 *     *
*********
```

### Steps to create a hollow pyramid star pattern are:

- Run 2 nested loops, 1st for 'n' times and there are 2 internal loops one to print the first series of spaces and the other to print star and space series
- Print star for first and last position in each row and space in between
- The print star at each position in the last row

*/
//set the first line of spaces and a star
//Number of space is adjustable
console.log(hollowPyramid("                         *"));

function hollowPyramid(str) {
  let pattern = str + "\n";
  let patternLength = str.length; //number of repetitions
  let firstSpace;
  let secondSpace = 1;

  //Repeat each line
  for (let x = 0; x < patternLength - 2; x++) {
    //Set a line of first series of spaces and a star
    firstSpace = patternLength - x - 2;
    for (let y = 0; y < firstSpace; y++) {
      pattern = pattern + " ";
    }
    pattern = pattern + "*";

    //Set a line of second series of spaces and a star
    for (let z = 0; z < secondSpace; z++) {
      pattern = pattern + " ";
    }
    pattern = pattern + "*" + "\n";
    secondSpace = secondSpace + 2;
  }

  //Set a bottom line of stars
  pattern = pattern + "*".repeat(patternLength * 2 - 1);
  return pattern;
}
