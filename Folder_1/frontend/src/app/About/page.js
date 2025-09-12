"use client"
import Navbar from "@/components/Navbar";
import {useState} from "react"
const About = ()=>{
    const[count,setCount] = useState(0); //this is destructuring count->getter setCount->setter
    // let count = 0;
    // function IncrimentCount(){
    //     count++;
    //     console.log(count);
    // }

    function IncrimentCount(){
        setCount(count+1);
        //setCount((prev)=prev+1);
    }

    return <>
    <Navbar setter={setCount}/>
    <h1>About page</h1>
    <h2>{count}</h2>
    <button onClick = {(e)=>{IncrimentCount()}}>Incriment</button>
    </>
}

export default About;