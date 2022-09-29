const isPrime = (num) => {

    if (num === 1) return false;

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
    (() => '---- sample ---')(),
    isPrime(2),
    isPrime(3),
    isPrime(5),
    isPrime(7),
    isPrime(11),
    isPrime(13),
    isPrime(17),
    isPrime(19),
    isPrime(23),
    isPrime(29),
]

tests.map(test => console.log(test))
