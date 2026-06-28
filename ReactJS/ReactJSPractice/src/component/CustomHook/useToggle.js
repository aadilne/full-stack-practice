
import { useState } from "react";

function useToggle(initialValue = false){

    const [value , setValue] = useState(initialValue)

    const toggle = () => setValue(prev => !prev)

    return [value , toggle]

    // custon Hook always return value and function        it's not return html
    // custom Hook start with   use    
    // use other React Hooks inside
}

export default useToggle