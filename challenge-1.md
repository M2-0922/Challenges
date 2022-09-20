# Capitalization Algorithm Challenge

### Write a function that accepts a string. The function should capitalize the first letter of each word in the string then return the capitalized string.

**Examples**

**Output** should be same as examples

```
 capitalize(‘a short sentence’) → ‘A Short Sentence’
 capitalize(‘a lazy fox’) → ‘A Lazy Fox’
 capitalize(‘look, it is working!’) → ‘Look, It Is Working!’

```

function capFirstLetter(string) {
    let array = string.split(" ");
    let capArray = [];
    for (let element of array) {
        let word = element.charAt(0).toUpperCase() + element.substring(1);
        capArray.push(word);
    }
    return capArray.join(" ");
}