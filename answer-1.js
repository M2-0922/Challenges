/*

Please put your code under this comment block. You can try your logic
Then you can add this file to staged area for commit and push to your own Branch ({your-name-with-dash})

*/

function changeUpperCase(text) {
    let word = text.split(" "); //split sentence with spaces(" ")
    let arr =[]; //declare an array to store words I split
    for(let i= 0; i < word.length; i++){
        arr.push(word[i].charAt(0).toUpperCase() + word[i].slice(1)); //return new elements into array
    }
    return arr.join(" "); //return to a sentence
}

console.log(changeUpperCase('a short sentence')); //A Short Sentence
console.log(changeUpperCase('a lazy fox')); //A Lazy Fox
console.log(changeUpperCase('look, it is working!')); //Look, It Is Working!

/*

1. Set space as separater and split sentences into words. 
- split() method / split(separator, limit)

2. Add elements that capitalized only the first letter to the array.
- use loop because each texts have more than 2 words.
- charAt() method that returns new string
- toUpperCase() method returns the calling string value converted to uppercase
- slice() method that extracts a section of a string and returnit as a new string without modifying the original string
- push() method that adds elements to the end of an array

3. Return to a sentence with a space between words.
- join() method creates and returns a new string by concatenating all of the elements in an array,
 separated by commas or a specified separator string.

*/

/*

hint from teacher :)!

let name = "joe"

console.log(name.charAt(0)) => j
console.log(name[0]) => j

console.log(name.slice(1)) => oe instead of joe  => so its slice it the name till first letter.

and also, for array to string, 
you can use .join() => method for array,
" " => this is space so you can use it .join(" ") for join element each other with space.

let arr = ["hello", "world"];
console.log(arr.join(" ")) => "hello world"

*/