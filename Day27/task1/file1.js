
import fs, { utimes } from "fs";


let res = ""
function codedText(text, key){
    for(let i = 0; i < text.length; ++i){
        let charCode = text[i].charCodeAt();
        res += String.fromCharCode(charCode ^ key)
    }

    return res
}

function change(inputFile, outputFile, key){
    let result = fs.readFileSync(inputFile, "utf-8");
    let text= codedText(result, 7)
    fs.writeFileSync(outputFile, text, "utf-8")
}

change("./text1.txt", "./text2.txt", 7)