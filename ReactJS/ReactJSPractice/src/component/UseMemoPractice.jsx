
import React, { useState , useMemo } from "react"
function        UseMemoPractice(){
    const [count , setCount] = useState(0)

    const user = useMemo(() =>({name : "Aadil" , age:24}) , [])
    console.log("Parent Rander")


    return (
        <>
        <h1>More Use Memo Practice</h1>
        <p>This output show on console</p>
        <h2>Prent Count: {count}</h2>
        <button onClick={() => setCount(count+1)}>click</button>

        <Child user={user}/>
        </>
    )
}

    const Child = React.memo(({user}) => {
        console.log("Child Rander");
        return <h3>User : {user.name}</h3>
    })



export default UseMemoPractice