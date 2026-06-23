import {useState , useEffect} from 'react';


function    Timer() {
    const [second , setSecond] = useState(0);
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() =>{
        const  interval = setInterval(() =>{
            setSecond((prev) => prev+1)
        },1000) 

        return () =>{                   // cleanup function return function in return
            clearInterval(interval) 
            console.log("clear Interval");
        } 
        
        
        //window Resize Update
        const handalResize = () => {
            setWidth(window.innerWidth)
        }

        window.addEventListener("resize" , handalResize)
        
        return () =>{
            window.removeEventListener("resize" , handalResize)
            console.log("unsubscribe From resize event");
        }

    } ,[])


    return(
        <>
        <h1>Timer Update</h1>
        <h2>Second:{second}</h2>

        <h1>Update Window Width Size</h1>
        <h2>Width : {width}px</h2>
        </>
    )
}
export default Timer