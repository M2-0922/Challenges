/* make a function to check if it's prime number or not */

function checkPrimeNumber (num) {
    if(num === 1){
        return false;
    }
    if(num === 2){
        return true;
    }
    for(let i = 2; i < num; i++){
        if(num % i === 0){
            return false;
        }else if(i + 1 === num){
            return true;
        }
    }
}

console.log(checkPrimeNumber(1));
console.log(checkPrimeNumber(2));
console.log(checkPrimeNumber(3));
console.log(checkPrimeNumber(4));
console.log(checkPrimeNumber(5));
console.log(checkPrimeNumber(6));
console.log(checkPrimeNumber(7));
console.log(checkPrimeNumber(8));
console.log(checkPrimeNumber(9));
console.log(checkPrimeNumber(10));