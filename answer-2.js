const arr = [...Array(5).keys()];

const staticNum = arr.length;

for (let i = 0; i < arr.length; i++) {
    let temp = '';
    for (let s = 1; s < 9; s++) {
        if (i === arr.length - 1) {
            temp += '*'.repeat(staticNum + i);
            break;
        }

        if (s === staticNum - i || s === staticNum + i) {
            temp += '*';
        }
        else {
            temp += ' ';
        }
    }

    console.log(temp);
}

//     *
//    * *
//   *   *
//  *     *
// *********