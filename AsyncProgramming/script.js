//set up of the request
let xhr = new XMLHttpRequest()

let url = "https://potterapi-fedeperin.vercel.app";

xhr.onload = function(data){
    console.log("data",JSON.parse(data.target.response))
}

xhr.onerror = function(err){
    console.log("error",err)
}

xhr.open("GET",url);

xhr.send()