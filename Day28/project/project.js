
import fs from "fs"

fs.readFile("text.txt", "utf-8", (err, data) =>{
    if(err){
        console.log(err)
    }

    let text = "world"
    let lines = []
    let i = 0;
    let line = ""
    while(i < data.length){
        line += data[i];
        if(data[i] === "\n"){
            line = line.slice(0, line.length-2)
            lines.push(line);
            line = ""
        }
        ++i
    }
    lines.push(line)

    for(let i = 0; i < lines.length; ++i){
        if(lines[i].toLowerCase().includes(text.toLowerCase())){
            console.log(i + 1)
        }
    }
})