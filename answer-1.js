/*

Please put your code under this comment block. You can try your logic
Then you can add this file to staged area for commit and push to your own Branch ({your-name-with-dash})

*/


//=======//
// way 1 //
//=======//

// let sentence = "a short sentence";
// let temp;
// for (let i = 0; i < sentence.length; i++){
//     if(i == 0){
//         temp = sentence[0].toUpperCase();
//     }else if(sentence[i - 1] == " "){
//         temp = temp + sentence[i].toUpperCase();
//     }else{
//         temp = temp +sentence[i];
//     }
// }
// console.log(temp);

//=======//
// way 2 //
//=======//

function capitalize(str) {
    let arr = str.split(" ");
    let sentence;
    for (let x = 0; x < arr.length; x++) {
      sentence = arr[x];
      arr[x] = sentence[0].toUpperCase() + sentence.slice(1);
    }
    console.log(arr.join(" "));
  }
  capitalize("a short sentence");