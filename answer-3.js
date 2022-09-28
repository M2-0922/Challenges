// Write a JavaScript program to calculate the factorial of a number.
// Output function should return the result as Number.
// console.log(factorial(5)) // 120
// console.log(factorial(6)) // 720

function factorial(n){
    if(n <= 1){
        return n;        
    }else{
        return n * factorial(n - 1);
    }
}

console.log(factorial(5));
console.log(factorial(6));

