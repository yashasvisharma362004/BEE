let url = 'https://dummyjson.com/products/1';

// fetch(url)
//  .then((data)=>{
//     return data.json()
//  }).then((data)=>{
//     console.log(data)
//  }).catch((err)=>{
//     console.log(err)
//  })

// fetch("https://jsonplaceholder.typicode.com/posts", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json"
//   },
//   body: JSON.stringify({
//     title: "foo",
//     body: "bar",
//     userId: 1
//   })
// })
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(error => console.error("Error:", error));


async function getData(){
try{
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1")
  const data = await response.json();
  console.log(data);
}catch(error){
console.log("Fetch Failed",error);
}
}

getData();

//fetch returns a promise