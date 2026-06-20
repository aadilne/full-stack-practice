import { useState } from "react"

function      StateManagement(){

    const  [count , setCount] = useState(0);
    // we can also use in userState (false) , userState ("Test") ,userState (["Red" , "Man",1]) , userState ({name:"Aadil" , Age:24})
    // Type of state  1.Local State 2.Derived State 3.Global State   4.Server State  5.URL State
          const increase  = () => {
            setCount(count+1)
          }

          const decrease = () => setCount(count-1);
          
          const reset = () => SetCount(count == 0);

    // Toggle test
    const [isVisiable , SetIsVisiable] = useState(false)

    // Like Button
    const [like , SetLike] = useState(false)


    const [student , SetStudent] = useState({
        name : "Aadil",
        grad: "A",
        city:"patna"
    })

    const changCity = () => SetStudent({...student , city:"Ara"})

    return (

        <>
        <h1>UseState use</h1> 
        <h2>count : {count}</h2>
        <button onClick={increase}> Increase</button>
        <button onClick={decrease}>Decrease</button>
        <button onClick={reset}> reset</button>
        <br /><br />


        <h2>Toggle text practice</h2>
        <button onClick={() => SetIsVisiable(!isVisiable)}> {isVisiable ? "Show" : "Hide"}</button>
        {isVisiable && <p>This is super duper secret message</p>}


        <h1>Like button </h1>
        <button onClick={() => SetLike(!like)}> {like ? "😍 Liked" : " 🤍 Like"}</button>


        <h1>Chang city </h1>
        <p>Name: {student.name}</p>
        <p>Grade: {student.grade}</p>
        <p>City: {student.city}</p>

        <button onClick={changCity}>Change City</button>




        </>
    )
}



export default StateManagement