const isPrimeNumber = function (num) {
    if (num <= 0) {
        return false;
    }

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

console.log(isPrimeNumber(2));
console.log(isPrimeNumber(10));
console.log(isPrimeNumber(13));
console.log(isPrimeNumber(91));
console.log(isPrimeNumber(100));