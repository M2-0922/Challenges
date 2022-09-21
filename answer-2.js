// method using padStart
let star = "*";
let midSpace = 2;
for (let y = 5; y > 0; y--) {
    if (y === 5) {
        let spaceStar = star.padStart(y, " ");
        console.log(spaceStar);
    } else if (y === 1) {
        let lastLine = "";
        for (let x = 0; x < 9; x++) {
            lastLine += star;
        }
        console.log(lastLine);
    }
    else {
        let spaceStar = star.padStart(y, " ");
        let spaceStar2 = star.padStart(midSpace, " ");
        console.log(spaceStar + spaceStar2);
        midSpace += 2;
    }
}     

// second method
let start = 4
let middleSpace = 1;
for (let x = 0; x < 5; x++) {
    let star = "*";
    let printLine = "";
    let printLastLine = "";
    let secondStar = "";
    for (let y = start; y > 0; y--) {
        printLine += " ";
    }
    if (x === 0) {
        console.log(printLine + star);
    } else if (x === 4) {
        for (let z = 0; z < 9; z++) {
            printLastLine += star;
        }
        console.log(printLastLine);
    } else {
        for (let a = 0; a < middleSpace; a++) {
            secondStar += " ";
        }
        console.log(printLine + star + secondStar + star);
        middleSpace += 2;
    }
    start--;
}