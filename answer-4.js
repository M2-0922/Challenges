function isPrime(number){
    // logic
    if(number === 1) return false; // 0(1)
    let i = 2; // 0(1)
    while(i < number){
        if(number % i == 0){
            return false;
        }
        i++;
    } // O(N)
    return true;
}

// Space complexity = O(1)
// Time complexity = O(N)

function isPrime(number){
    for(let i = 2; i < number; i++){
        if(number % i === 0){
            return false;
        }
    } // O(N)
    return number > 1;
}

// Space complexity = O(1)
// Time complexity = O(N)

console.log(isPrime(1)); // false
console.log(isPrime(5)); // true
console.log(isPrime(6)); // false


