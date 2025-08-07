let url = 'https://dummyjson.com/products/1';

axios.get(url)
.then((data)=>{
    console.log(data)
}).catch((err)=>{
    console.log("error",err)
})