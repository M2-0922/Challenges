/*

Please put your code under this comment block. You can try your logic
Then you can add this file to staged area for commit and push to your own Branch ({your-name-with-dash})

*/

function capitalize(str) {
    let outputStr = "";

    for (let i = 0; i < str.length; i++) {
        const currChar = str.charAt(i);

        // Capitalize if the first character of the string input is not a blank space
        if (i === 0 && currChar !== " ") {
            outputStr += currChar.toUpperCase();
            continue;
        }

        // Capitalize if str[i] is a character and the last character is a blank space
        if (currChar !== " " && str.charAt(i-1) === " ") {
            outputStr += currChar.toUpperCase();
            continue;
        }

        // Add the str[i] to outputStr in the other cases
        outputStr += currChar;
    }

    return outputStr;
}

// Test cases
console.log(capitalize("a short sentence"));
console.log(capitalize("a lazy fox"));
console.log(capitalize("look, it is working!"));