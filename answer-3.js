////### Write a JavaScript program to calculate the factorial of a number.


//**Output** function should return the result as Number.

// ```
// console.log(factorial(5)) // 120
// console.log(factorial(6)) // 720
// ```

function factorial(num) {
  if (num == 0) {
    return 1;
  }else{
    return num * factorial(num -1);
  }
}

console.log(factorial(6));
