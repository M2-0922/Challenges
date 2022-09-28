var space = " ";
var star = "*";

for(i = 1; i <= 5; i++) {
  if(i == 1) {
    console.log(space.repeat(5 - i) + star);
  } else if(i == 5) {
    console.log(star.repeat(9));
  } else {
    console.log(space.repeat(5 - i) + star + space.repeat(i * 2 - 3) + star);
  }
}