const container = document.getElementById("container")

async function getUser(){
    let response = await axios.get("http://localhost:3000/user")//axios ko bola h ek get req bhejo es path p
    //sending a get req to this path
    let user = response.data.user;//user mera data store karega jo bhi res aaya h vo

    const h2 = document.createElement("h2");
    h2.innerText = `${user.name} welcomes you`;

    container.innerHTML = `<p>${user.email}</p> <p>${user.age}</p>`;//equal to likha h mtlab oerride override all the html inside "div" with id container
    //container.append(h2) //push the element at the bottom
    container.prepend(h2)
}
getUser();