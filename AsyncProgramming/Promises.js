//promises is a js object used to handle async programming
//there are three types of promises state 
//pending fulfilled rejected

let promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Data received")
    },1000)
});
promise.then(result=>console.log(result))
.catch(error=>console.log("error"));