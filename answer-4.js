/* If the number can be devided by another number/other numbers(< the number) without any reminder, the number is not a prime number. If not, then the number must be a prime number. */

function isPrime(number) {
  if (number == 1) {
    return false;
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
      break;
    }
  }
  return true;
}

console.log(isPrime(1)); // false
console.log(isPrime(2)); // true
console.log(isPrime(5)); // true
console.log(isPrime(6)); // false
console.log(isPrime(7)); // true
console.log(isPrime(8)); // false
console.log(isPrime(9)); // false
console.log(isPrime(11)); // true
console.log(isPrime(13)); // true
console.log(isPrime(15)); // false