let city = "Chandigarh"
let key = "57f1ed83bf9f7965e726086759e47ced";
let url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${key}`
let lat;
let lon;
axios.get(url)
.then((data)=>{
console.log(data);
return{
'lat':data.data[0].lat,
'lon':data.data[0].lon

}
})
.then((data)=>{
    let newurl = `https://api.openweathermap.org/data/2.5/weather?lat=${data.lat}&lon=${data.lon}&appid=${key}`
    return axios.get(newurl)
})
.then((data)=>{
    console.log(data.data)
})
.catch((error)=>{
    console.log(error)
})