function primeNumbers(number) {
    for(i = 2; i < number; i++) {
        if (number % i === 0) {
            return console.log(number + ' is not prime Number.');
        };
    };
    return console.log(number + ' is prime Number.');
};

primeNumbers(27)
primeNumbers(31)