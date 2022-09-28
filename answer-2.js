let n = 5;
let string = "";
//external loop
for (let i = 1; i <= n; i++) {
    //print spaces
    for (let j = 1; j <= n - i; j++) {
        string += " ";
    }
    //print star
    for (let k = 0; k < 2 * i - 1; k++) {
        if (i === 1 || i === n) {
            string += "*";
        } else {
            if (k === 0 || k === 2 * i - 2) {
                string += "*";
            } else {
                string += " ";
            }
        }
    }
    string += "\n";
}
console.log(string);