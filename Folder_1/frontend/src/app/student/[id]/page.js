// "use client"
// import {useRouter} from "next/router"
//import { useRouter } from "next/router"

// export default ({params})=>{
//     const {id} = params;
    //this one is server side
//     return <>
//     <h1>Hello {id}</h1>
//     </>
// }


// export default ()=>{
//     const router = useRouter();
//     const {id} = router.query;
//     return (<>
//     <h1>Hello this is Yashasvi Sharma</h1>
//     </>
//     );
// }

"use client";
import { useParams } from "next/navigation";

export default function InfoPage() {
  const { id } = useParams();

  return (
    <>
      <h1>Hello {id}</h1>
    </>
  );
}
