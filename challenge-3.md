# Factorial (recursion) Challenge

### Write a JavaScript program to calculate the factorial of a number.

**Output** function should return the result as Number.

```
console.log(factorial(5)) // 120
console.log(factorial(6)) // 720
```

function factorial(x) {

    // if number is 0
    if (x == 0) {
        return 1;
    }

    // if number is positive
    else {
        return x * factorial(x - 1);
    }

}

console.log(factorial(5));
console.log(factorial(6));
