console.log("    *");
for(i = 3, j = 1;i > 0, j < 6; i--, j+=2) {
    let a = " ";
    let b = "*"
    let row = a.repeat([i]) + b + a.repeat([j]) + b;
    console.log(row);
};
console.log("*********")