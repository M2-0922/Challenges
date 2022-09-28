function findFac (number){

    if (number==1) {
        return 1
    }
    return number * findFac(number-1);
}

console.log(findFac(3));