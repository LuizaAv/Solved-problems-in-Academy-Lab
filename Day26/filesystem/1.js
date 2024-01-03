import fs from "fs";


let a = "a"
let b = "b"

fs.readFile("./text.txt", "utf-8", (err, data) => {
    if(err){
        console.log(err)
    }

    let res = "";
    for(let i = 0; i < data.length; ++i){
        if(data[i] !== a){
            res += data[i]
        }else{
            res += b;
        }
    }

    fs.writeFile("./text2", res, (err) => {
        if(err){
            console.log(err)
        }
    })
})