

function factorial(num){
    if (num === 1){
        return 1;
    }else{
        return factorial(num - 1) * num;
    }
}

console.log(factorial(5));
console.log(factorial(6));