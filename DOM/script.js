const div = document.querySelector('div')
const ul = document.querySelector('ul')
const lis = document.querySelectorAll('li')

div.addEventListener('click',function(){
    console.log("div was clicked");
})

ul.addEventListener('click',function(event){
    event.stopPropagation();
    console.log('ul was clicked');
})
for(li of lis){
    li.addEventListener('click',function(){
        event.stopPropagation();
        console.log('li was clicked');
    })
}
//this is called event bubbling agar m li ko click karunga to uska parent ul bhi occur hoga aur div bhi
//to stop this we use event.stopPropagation()