/*
function factorial(number) {
    if (number == 0) {
        return 1;
    } else {
        console.log("---- numebers", number);
        return number * factorial(number - 1);
    }
}

console.log(factorial(5));
*/
// 4! = 4*3*2*1

function countDown(number){
    console.log(number);
    let next = number - 1;
    if(next > 0){
        countDown(number-1)
    }

}
console.log(countDown(5));

function sum(number){
    let 
}

console.log(sum(5));

function sum(number) {
    
}
//recource
function pow(number, x) {
    let result = 1;

    for (let i = 0; i < x; i++) {
        result *= number;    
    }
    return result;
}

//loop
function pow(number, power) {
    if (power == 1) {
        return number;  
    }else{
        return number * pow(number, power - 1);
    }
    
}

console.log(pow(2,2));
console.log(pow(2,3));
console.log(pow(2,4));
