import Conditional_Rendering from "./Conditional_Rendering"
import OneCompo from "./OneCompo"

function  LminCompo(){

    let isLogging = false;

   if(isLogging){
    return <Conditional_Rendering />
   } else{
    return <OneCompo />
   }
    
}

export default LminCompo