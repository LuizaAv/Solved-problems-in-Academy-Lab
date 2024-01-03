








import fs from "fs";


let countLine = 1;
let countWords = 1;
let countDigits = 0; 

fs.readFile("./text.txt", "utf-8", (err, data) => {
    if(err){
        console.log(err)
    }

    for(let i = 0; i < data.length; ++i){
        if(data[i] === "\n"){
            ++countLine
            ++countWords
        }else if(data[i] === " "){
            countWords++;
            while(data[i] === " ") i++;
            i--
        }else{
            ++countDigits
        }
    }

    console.log("CountDigits: ", countDigits);
    console.log("CountLines: ", countLine);
    console.log("Countwords: ", countWords)
})