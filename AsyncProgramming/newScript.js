//for loop in js
// for(let i=0;i<10;i++){
//     let element = i;
//     if(i==5){
//         console.log("5 is a number");
//     }
//     console.log(element);
// }

// const myArray = ["banana","cherry","lichi","guawa"];
// let len = myArray.length;
// console.log(myArray.length);
// for(let i=0;i<len;i++){
//     console.log(myArray[i]);
// }

// for(let index = 1; index<=20; index++){
//     if(index == 5){
//         console.log("Detected 5");
//         break;
//     }
//     console.log(`value of i is ${index}`)
// }

// for(let i=0;i<=20;i++){
//     if(i==5){
//         console.log("Detected 5");
//         continue;
//     }
//     console.log(`the val of i is ${i}`);
// }
// 


// const arr = ["banana","lichi","apple","mango"];
// let len = arr.length;
// console.log(arr[2]);

// let score = 11;
// do{
//     console.log(`score is ${score}`);
//     score++;
// }
// while(score <= 10);


//for of loop
// const arr = [1,2,3,4,5,6,7,8,9,10];
// for(const num of arr){
//     console.log(`the elements of array are ${num}`);
// }

// const str = "Hello World";
// for(const ch of str){
//     console.log(`the char of str are ${ch}`);
// }


//Map
// const map = new Map();
// map.set("J","Java");
// map.set("py","Python");
// map.set("cpp","cplusplus");
// map.set('js',"JavaScript");

// for(const key of map){
//     console.log(key);
// }

// for(const [key,value] of map){
// console.log(key, ":-",value);
//  }

//  const myObj = { 
//     cpp: "cplusplus",
//     js: "JavaScript",
//     java: "JavaCore"

//  }
//  for(const obj of myObj){
//     console.log(obj);
//  }
//objects are not iterable by for of loop
//so we use for in loop
// for(const key in myObj){
//     console.log(`${key} + ":=" + ${myObj[key]}`);
// }

// const prog = ["cpp","js","py","java","rb"]
// for(const key in prog){
//     console.log(prog[key]);
// }


// const map = new Map()
// map.set("IN","india")
// map.set("usa","united state of america")
// map.set("fr","france")
// map.set("SA","south africa");

// for(const key in map){
//     console.log(key)
// }

//for each loop is here
const arr = ["py","ruby","js","cpp","java"];
// arr.forEach(function(val){
// console.log(val);
// })

// function printMe(item){
//     console.log(item);
// }
// arr.forEach(printMe);
// arr.forEach((item,index,arr) =>{
//    console.log(item,index,arr);
//  })

// const myObj = [{
//     langName : "java",
//     langfilename : "jv"
// },
// {
//     lanName : "JavaScript",
//     langfilename: 'js',
// },
// {
//     lanName: "Cplusplus",
//     langfilename:"cpp"
// }
// ]
//obj traverse hota h for in loop se ya for each se
// myObj.forEach(function(item){
//     console.log(item.langfilename)
// })

// console.log(myObj[1].lanName)


// const a1 = myObj.filter((val)=>{
//     return val.lanName == "JavaScript";
// })
// console.log(a1);

// const myNums = [1,2,3,4,5,6,7,8,9,10];
// const newNums = myNums.filter((val)=>{
//     return val > 4;
// })
// console.log(newNums);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  const myBooks = books.filter((bk) => {
     return bk.title == 'Book Two' || bk.genre == 'Fiction'
    
  })
  console.log(myBooks);

  const myNums = [1,2,3,4,5,6,7,8,9]
  const newNums = myNums.map((num) => {
    return num*10
});
  console.log(newNums);