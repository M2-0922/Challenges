/*# Prime Numbers

A prime number is a natural number greater than 1 whose only factors are 1 and the number itself. That is, it can only be divided equally by 1 and itself.
The number 5 is a prime number because its ONLY factors are 1 and 5. There is no other way to ‘create’ the number 5.
The number 4 is `not` a prime number because 2 x 2 also gives us 4.
The number 20 is `not` a prime number because 5 x 4 also gives us 20, as well as 2 x 10.*/

// For loop
const isPrime = function (num) {
  if (num < 1) return false;

  let ans;
  for (i = 2; i < num; i++) {
    if (num % dividingArr[i] === 0) return false;
  }
  return true;
};
console.log(isPrime(2));

// While loop
const isPrime2 = function (num) {
  if (num <= 1) return false;

  while (i < num) {
    if (num === 0) return false;
    i++;
  }
  return true;
};

console.log(isPrime2(9));
