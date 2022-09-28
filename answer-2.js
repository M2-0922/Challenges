/*=======*/
/* way 1 */
/*=======*/

let width = 9;
let n = (width + 1) / 2  //height
let string = "";

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n - i; j++) {
    string += " ";
  }
  for (let k = 1; k <= 2 * i - 1; k++) {
    if(i === 1 || i === n || k === 1 || k === 2 * i - 1) {
      string += "*";
    }else{
      string += " ";
    }
  }
  string += "\n";
}
console.log(string);



/*=======*/
/* way 2 */
/*=======*/

let width = 9;
let n = (width + 1) / 2  //height

for(let i = 1; i <= n; i++){
    let outBlank = " ".repeat(n - i);
    if(i === 1){
        console.log(`${outBlank}*${outBlank}`);
    }else if(1 < i && i < n){
        let innerBlank = " ".repeat(2 * i - 3);
        console.log(`${outBlank}*${innerBlank}*${outBlank}`);
    }else if(i === n){
        console.log("*".repeat(width));
    }
}
