import Greeting from "./Greeting"
import GreetingWithStyle from "./GreetingWithStyle"


function  AppHOC(){


    return (
        <>
        <Greeting name ="Aadil"/>
        <GreetingWithStyle name ="Nezam" />
        </>
    )
}

export default AppHOC