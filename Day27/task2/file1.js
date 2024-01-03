import fs from "fs";

fs.readFile("./text.txt", "utf-8", (err, data) =>{
    if(err){
        console.log(err)
    }
    let t = 1;
    let res = ''
    for (let i = 0; i < data.length; i++) {
        if(data[i] === "\n"){
            res+="\n";
        }else if(data[i] === " "){
            res+= " ";
        }else if(data[i] === data[i+1]){
            ++t;
        }else{
            res+= data[i] + `${t}`;
            t = 1;
        }
    }
    console.log(res);
    fs.writeFile("./text1.txt", res, (err, data) => {
        if(err){
            console.log(err)
        }

    })
})

