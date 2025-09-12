const btn = document.querySelector('button');
let ul = document.querySelector('ul')
let inp = document.querySelector('input')
let delBtns = document.querySelectorAll('.delete')

btn.addEventListener('click',function(){
    let item = document.createElement('li')
    item.innerText = inp.value;

    let delBtn = document.createElement('button')
    delBtn.innerText= "delete"
    delBtn.classList.add('delete')
    item.appendChild(delBtn)
    ul.appendChild(item);
    console.log(inp.value)
    inp.value=""
})

ul.addEventListener('click',function(event){
    if(event.target.nodeName == 'BUTTON'){
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log('delete');
    }
})

// for(delBtn of delBtns){
//     delBtn.addEventListener('click',function(){
//         //iska paent del karna h
//         let par = this.parentElement;
//         par.remove();
//     })
// }
