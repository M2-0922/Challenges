function isPrime(n) {
  for (i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
      break;
    }
  }
  return true;
}

console.log(isPrime(2)); // true
console.log(isPrime(5)); // true
console.log(isPrime(6)); // false
console.log(isPrime(7)); // true
console.log(isPrime(8)); // false
console.log(isPrime(9)); // false
console.log(isPrime(11)); // true
console.log(isPrime(13)); // true
console.log(isPrime(15)); // false