/*

Please put your code under this comment block. You can try your logic
Then you can add this file to staged area for commit and push to your own Branch ({your-name-with-dash})

*/
function capitalize(sentence){
    if(typeof sentence == 'string'){
        let array = sentence.split(" ");
        //let result = "";
        let result = [];
        array.forEach(element => {
            //result += element.charAt(0).toUpperCase() +  element.slice(1) + " ";
            result.push(element.charAt(0).toUpperCase() +  element.slice(1))
        });
        //console.log(result.substr(0, result.length - 1));
        console.log(result.join(" "));
    }else{
        console.log("please enter the String sentence");
    }
};

capitalize('a short sentence');
capitalize('a lazy fox');
capitalize('look, it is working!');