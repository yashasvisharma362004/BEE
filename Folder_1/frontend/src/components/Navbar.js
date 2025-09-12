import React from 'react'
const Navbar = ({setter})=>{
    return(
        <div className='flex justify-center items-center'>
            <button onClick ={(e)=>{setter((prev)=>prev+1)}}>Increment from navbar</button>
        </div>
    )
}

// const Navbar = ()=>{
//     return(
//         <div>Navbar</div>
//     )
// }

export default Navbar;