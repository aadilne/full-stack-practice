
import {createContext, useContext , useState} from "react"

// const UserContext = createContext();

// function  UseContext(){

//   //  const  user = "AAAdil NEzam";

//   const user = {name:"Aadil Nezam" , role: "Admin"}


//     return (
//         <>
//         <h1>useContext Practice</h1>

//         <UserContext.Provider value={user}> 
//           <Parent />
//         </ UserContext.Provider>
//         </>
//     )
// }


// function Parent(){

//     return (
//         <>
//         <Child/>
//         </>
//     )
// }


// function Child(){
//     const user = useContext(UserContext)

//     return(
//         <>
//    {/*  <h2 style={{color:"blue"}}> Child name: {user}</h2> */}
//         <GrandChild/>
//         </>
//     )
// }

// function GrandChild(){

//   //  const user = useContext(UserContext)

//   const {ame , role} = useContext(UserContext)

//     return(
//         <>
//      {/*  <h1 style={{color:"green"}}>My name is {user}</h1>  */} 
//      <h2>Welcome {name} - your role is {role}</h2>
//         </>
//     )
// }




const ThemContext = createContext();

function  UseContext(){

const [theme , setTheme] = useState("light");


    return (
        <>
        <h1>useContext Practice</h1>

        <ThemContext.Provider value={{theme , setTheme}}> 
          <Toolbar />
        </ ThemContext.Provider>
        </>
    )
}


function Toolbar(){

    return (
        <>
        <ThemeButton/>
        </>
    )
}


function ThemeButton(){

    const {theme , setTheme} = useContext(ThemContext)
    

    return(
        <>
            <button onClick={() => setTheme(theme==="light" ? "dark" : "light")}
                style={{backgroundColor:theme==="light" ? "#fff" : "#333",
                        color: theme==="light" ? "#000" : "#fff",
                }}>Current Theme: {theme}</button>
        </>
    )
}

function GrandChild(){

  //  const user = useContext(UserContext)

 

    return(
        <>
    
        </>
    )
}





export default UseContext 