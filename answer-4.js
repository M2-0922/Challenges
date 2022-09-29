function isPrimeNumber(n) {
    let x = 2;
    if (n === 1) {
        return false;
    }
    while (n > x) {
        if (n % x === 0) {
            return false;
        }
        x++;
    }
    return true;
}



for (let i = 1; i < 100; i++) {
    console.log(`is ${i} prime number? ${isPrimeNumber(i)}`);
}