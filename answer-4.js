// # Prime Numbers

// A prime number is a natural number greater than 1 whose only factors are 1 and the number itself. That is, it can only be divided equally by 1 and itself.

// The number 5 is a prime number because its ONLY factors are 1 and 5. There is no other way to ‘create’ the number 5.

// The number 4 is `not` a prime number because 2 x 2 also gives us 4.

// The number 20 is `not` a prime number because 5 x 4 also gives us 20, as well as 2 x 10.


function isPrime(num) {
  if (num <= 1) {
    return false;
  }else if (num == 2){
      return true;
  }else{
    for (i=2; i<num; i++) {
      if (num % i == 0) {
        return false;
      }
      if (i + 1 == num){
        return true;
      }
    }
  }
}

console.log(isPrime(5)); //ture
console.log(isPrime(4)); //false
console.log(isPrime(20)); //false