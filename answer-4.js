function primeNumber (num) {
    if (num <= 1) {
        return false;
    } else if (num === 2) {
        return true;
    } else {
        for (let i = 2; i < num; i ++) {
            if (num % i === 0) {
                return false;
            } else {
                return true;
            }
        }
    }
}
console.log(primeNumber (3));