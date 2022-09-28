var arr = [true, false, false, true, false ];
    //countrue = [false, false, false, false ];
    //countrue = [];
function countTrue (array) {
  //let count = 0;
  if(array.length == 0){
    return 0;
  }
  let count = 0;

    for (let i= 0; i < arr.length; i++) {
        if(arr[i]){
            count++;
        }
        
    }
    return count;
}