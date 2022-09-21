function writeStarFromColumnNum(num){
    num = Math.round(num);
    let result = "";

    if(num >= 5){
        let column = (num % 2 !=0) ? num : num - 1;
        let row = Math.ceil(column / 2);
        let array = [];

        for(let i = 0; i < row; i++ ){
            let temp = new Array(column);

            if(i == (row - 1)){
                temp.fill("*");

            }else{
                for(let j = 0; j < column; j++){
                    if(j == (Math.floor(column/2) - i) || j == (Math.floor(column/2) + i)){
                        temp[j] = "*";
                    }else{
                        temp[j] = " ";
                    }
                }
            }
            array[i] = temp.join("");
        }
        result = array.join("\n");

    }else{
        result = "Please enter the number greater than 5";
    }

    return result;
}

console.log(writeStarFromColumnNum(9));