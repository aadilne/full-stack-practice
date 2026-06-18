
import './External.css'

function    ConditionRendering(){

const isLoggedIn = false;
let message;
 
{/*  if(isLogin){
    return <h1>User is login</h1>
}else{
    return <h1>Pleas login</h1>
}
*/}

if (isLoggedIn) {
    message = <h1>user loggedin </h1>
}else{
    message = <h1>pleas login</h1>
}

// Ternery oprator
const student = true;

const isVisiable =true;

return ( 
       <div> 
        <p>{message}</p> 

        <h1>Ternary oprator practice</h1>
        <div>{student ? "came school" : "not came school"}</div>
 
        <h1>This is Terneri oprator with using conditional CSS</h1>
        <h2 className= {isVisiable ? "visiable" : "unvisiable"} > visiable and unvisiable line</h2>


       </div>
      )

}

export  default ConditionRendering