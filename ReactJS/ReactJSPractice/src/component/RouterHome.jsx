
import { useNavigate } from "react-router-dom"

function  RouterHome(){
    const navigate = useNavigate();


    return(
        <>
        <h1>Home Page</h1>
        <button onClick={() => navigate("/RouterAbout")}>about </button>
        </>
    )
}

export default RouterHome