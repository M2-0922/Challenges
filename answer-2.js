function getHollowPyramidStar(size) {
    const arr = [...Array(size).keys()];

    // limit of x-axis.
    const cols = arr.length * 2 - 1;

    // Middle of array x-axis.
    const staticNum = arr.length;

    let pyramid = '';

    for (let i = 0; i < arr.length; i++) {
        let temp = '';

        for (let s = 1; s < cols; s++) {
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
        pyramid += temp + '\n';
    }

    return pyramid
}

console.log(getHollowPyramidStar(5));

//     *
//    * *
//   *   *
//  *     *
// *********