/* ### Write a JavaScript program to calculate the factorial of a number.


**Output** function should return the result as Number.

```
console.log(factorial(5)) // 120
console.log(factorial(6)) // 720
``` */

function factorialize(num) {
    if (num < 0) 
          return -1;
    else if (num == 0) 
        return 1;
    else {
        return (num * factorialize(num - 1));
    }
  }
  factorialize(5);
  factorialize(6);



