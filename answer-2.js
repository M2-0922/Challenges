<<<<<<< HEAD
let string = "";
let n = 5;
//global scope

for (let i = 1;i<= n;i++ ) {

    for (let j = 1;j<= n - i;j++ ){
        string += " ";
    }


for (let k = 0; k < 2 * i - 1; k++) {
    if (i === 1 || i === n) {
        string +="*";
    }  else {
        if (k === 0 || k ===2 * i - 2){
            string += "*";
        } else {
            string += " ";
        }
    }
}
string += "\n";
}

=======
let n = 5;
let string = "";

// External loop
for (let i = 1; i <= n; i++) {
  // printing spaces
  for (let j = 1; j <= n - i; j++) {
    string += " ";
  }
  // printing star
  for (let k = 0; k < 2 * i - 1; k++) {
    if(i === 1 || i === n) {
      string += "*";
    }
    else {
      if(k === 0 || k === 2 * i - 2) {
        string += "*";
      }
      else {
        string += " ";
      }
    }
  }
  string += "\n";
}
>>>>>>> master
console.log(string);