/*

Please put your code under this comment block. You can try your logic
Then you can add this file to staged area for commit and push to your own Branch ({your-name-with-dash})

*/
const strings = [
    'a short sentence',
    'a lazy fox',
    'look, it is working!'
];

const capitalize = (str) => {

    // Split strings by space.
    const splitedStr = str.split(' ');

    // Map splitedStr and replace first letter for each strings.
    return splitedStr.map((ss) => ss[0].toUpperCase() + ss.substring(1)).join(" ");
}

strings.forEach(string => console.log(capitalize(string)))
