// Hollow Pyramid Star Pattern
//     *
//    * *
//   *   *
//  *     *
// *********
// Steps to create a hollow pyramid star pattern are:
// Run 2 nested loops, 1st for 'n' times and there are 2 internal loops one to print the first series of spaces and the other to print star and space series
// Print star for first and last position in each row and space in between
// The print star at each position in the last row

let space = " ";
let star = "*";

for(i = 1; i <= 5; i++) {
  if(i == 1) {
    console.log(space.repeat(5 - i) + star);
  } else if(i == 5) {
    console.log(star.repeat(9));
  } else {
    console.log(space.repeat(5 - i) + star + space.repeat(i * 2 - 3) + star);
  }
}

