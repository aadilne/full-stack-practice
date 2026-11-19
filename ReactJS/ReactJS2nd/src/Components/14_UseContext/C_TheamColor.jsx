
import { createContext , useContext , useState } from "react"

const ThemContext = createContext();

function C_TheamColor(){

    const [ them , setThem] = useState("lite");
    return(
        <div>
            <ThemContext.Provider value={{them , setThem}}>
                <Toolbar />
            </ThemContext.Provider>
        </div>
    )
}

function Toolbar(){

    return(
        <div>
            <ThemColorPar />
        </div>
    )
}




function  ThemColorPar() {
    const {them , setThem} = useContext(ThemContext);   // yha variable name diffrent vi rkh skte hai.

  return (
    <div>
        <button onClick={() => setThem(them === "lite" ? "dark" : "lite")}
        style={{background : them === "lite" ? "white" : "black" ,
            color : them === "lite" ? "black" : "white"
        }}    
        >Change Them</button>
        <p> Current Them : {them} </p>
    </div>
  )
}

export default C_TheamColor