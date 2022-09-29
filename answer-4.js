const isPrime = (num) => {

    if (num === 1 || num === 2) return true;

    for (let i = 2; i < 9; i++) {
        if (num !== i && num % i === 0) return false;
    }

    return true;
}

const tests = [
    isPrime(1),
    isPrime(2),
    isPrime(3),
    isPrime(4),
    isPrime(5),
    isPrime(6),
    isPrime(7),
    isPrime(8),
    isPrime(9),
    isPrime(10),
    isPrime(11),
    isPrime(12),
    isPrime(13),
]

tests.map(test => console.log(test))
