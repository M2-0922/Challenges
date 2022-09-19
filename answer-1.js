/*

Please put your code under this comment block. You can try your logic
Then you can add this file to staged area for commit and push to your own Branch ({your-name-with-dash})

*/

var sentence = 'a short sentence';
console.log(
    sentence[0].toUpperCase() + sentence.slice(1));

var sentence = 'a lazy fox';
console.log(
        sentence[0].toUpperCase() + sentence.slice(1));
    
var sentence = 'look, it is working!'
var capitalizeString = (str) => str[0].toUpperCase() + str.slice(1).toLowerCase();
var capitalizeWords = (str) => str.split(' ').map(capitalizeString).join(' ');
console.log(capitalizeWords(sentence));
        