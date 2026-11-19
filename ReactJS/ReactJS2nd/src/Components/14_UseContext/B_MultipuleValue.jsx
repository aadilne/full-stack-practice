
import { createContext ,  useContext } from "react"

const UserContext = createContext();

function B_MultipuleValue() {

    const user = {name :"Multi AAdil" , class :12};


  return (
    <div>
        <div> useContext with Multipule value</div>

        <UserContext.Provider value={user} >
            <Parent/>

        </UserContext.Provider>

    </div>
  )
}

function Parent(){

    return (
        <div>
            <Child/>
        </div>
    )
}

function Child(){
    
    return (
        <div>
            <GrandChild/>

        </div>
    )
}

function GrandChild(){

    const userB = useContext(UserContext);
    
    return(
        <div>
            <p> Multi User Name: {userB.name} And Class is {userB.class} </p>
        </div>
    )
}

export default B_MultipuleValue