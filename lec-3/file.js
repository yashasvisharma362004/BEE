const fs = require('fs')//fs is my built-in module

//async->blocking
//const result = fs.writeFileSync("./test.txt","Hey there");
//agar m kuch aur likhu to ye override kar dega 

//
// async->Non blocking
//fs.writeFile("./test.txt","Hello World",(err)=>{})

// const result = fs.readFileSync("./contacts.txt","utf-8")
// console.log(result);
//jab bhi m sync kar rha hu vo mujhe result return kar rha h

fs.readFile("./contacts.txt","utf-8",(err,result)=>{
    if(err){
        console.log("Error",err);
    }else{
        console.log(result);
    }
})
//async wala kuch return nhi karta

fs.appendFileSync("./test.txt","Hey there \n");