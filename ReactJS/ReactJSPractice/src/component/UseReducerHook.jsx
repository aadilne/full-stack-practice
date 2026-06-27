
import { useReducer } from "react"
// useState change one variable at a time
// useReducer Change multipule variable at a time

// function        UseReducerHook(){
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

// export default UseReducerHook



function  UseReducerCounter(){
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

    const [state , dispatch] = useReducer(reducer , {count :0})

   return (
        <>
            <h2>Count : {state.count}</h2>
            <button onClick={() => dispatch({type : "increment"})}></button>
            <button onClick={() => dispatch({type : "decrement"})}></button>
            <button onClick={() => dispatch({type : "reste"})}></button>
        </>
    )
}

export default UseReducerCounter