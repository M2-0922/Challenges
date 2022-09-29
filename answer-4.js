function isPrime(n) {
  if (n <= 1) {
    return "False";
  } else if (n === 2) {
    return "True";
  }
  for (i = 2; i < n; i++) {
    if (n % i === 0) {
      return "False";
    }
  }
  return "True";
}

console.log(isPrime(33));
