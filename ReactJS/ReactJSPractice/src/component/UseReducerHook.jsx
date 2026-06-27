
import { useReducer } from "react"
// useState change one variable at a time
// useReducer Change multipule variable at a time


 function        UseReducerHook(){
    function Reducer(state , action){
        switch(action.type){
            case "increment":
                return {count :state.count+1}
            case "decrement":
                return {count :state.count-1}
            case "reset":
                return {count : 0}
                default:
                    return state;
        }
    }

    const [state , dispatch] = useReducer(Reducer , {count :0}) 


    
//                     // toggle dispatch function hai
//     const  [checked , toggle] = useReducer((checked) => !checked , false )


//     return (
//         <>
//         <h1>Use Reducer Hook</h1>

//         <input type="checkbox" checked={checked} onChange={toggle} />

//         {checked ?"checked" : "not checked"}
//         </>
//     )
// }






   
   return (
        <>
            <h2>Count : {state.count}</h2>
            <button onClick={() => dispatch({type : "increment"})}>Increse</button>
            <button onClick={() => dispatch({type : "decrement"})}>Decrese</button>
            <button onClick={() => dispatch({type : "reset"})}>Reset</button>
        </>
    )
 }

 export default UseReducerHook