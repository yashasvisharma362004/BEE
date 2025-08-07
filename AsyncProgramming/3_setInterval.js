let timer = setInterval(()=>{
    console.log("This fun runs after every 5 seconds")
},5000)

setTimeout(()=>{
    clearInterval(timer);
},17000)