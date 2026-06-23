
import { useState , useEffect } from "react"


function   UseEffectHook(){

    const [count , setCount] = useState(0);
    const [name , setName] = useState("");


    //this useEffect automatice print wen this component lode
    /* useEffect(() =>{
        console.log("Print UseEffet when Increase button click");  
    }) */
 

    //When empty Array apply in useEffet parameater so useEffect run only one time
   /*useEffect(()=>{
    console.log("Print useEffet only one time when Increase button click");
   },[])*/


    // When UseState variable define in useEffect parameater so useEffect run Whenever clik on click Button
   /* useEffect(() =>{
        console.log("Print useEffet whenever useState variable define in useEffect");
    },[count]) */

   //This useEffect is not run because other useState variable defien in useEffect parameter. after count define so it will run
   /* useEffect(() =>{
        console.log("This useEffect is not run because other useState variable defien in useEffect parameter");
    } , [name , count]) */

    useEffect(() =>{
        document.title = `Count ${count}`;
        console.log("useEffect run");
    })




    return (
        <>

        <h2>Count: {count}</h2>
        <button onClick={() => setCount(count+1)}>Increase</button>

        </>
    )
}

export default UseEffectHook