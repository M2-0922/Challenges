/*Factorial (recursion) Challenge
Write a JavaScript program to calculate the factorial of a number.
Output function should return the result as Number.*/

console.log(factorial(5)); // 120
console.log(factorial(6)); // 720

function factorial(number) {
  if (number <= 1) {
    return number;
  } else {
    return number * factorial(number - 1);
  }
}
