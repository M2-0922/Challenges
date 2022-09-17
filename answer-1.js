/*

Please put your code under this comment block. You can try your logic
Then you can add this file to staged area for commit and push to your own Branch ({your-name-with-dash})

*/

let arr = ["a", "short", "sentence","\n","a", "lazy", "fox","\n", "look,", "it", "is", "working"];
  
for(i in arr){
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);   
 }

 console.log(arr.join(" "));

