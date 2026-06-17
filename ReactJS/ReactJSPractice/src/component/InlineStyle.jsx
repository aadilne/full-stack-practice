
import './External.css'
import modulcss from "./Modcss.module.css"

function InlineStyle(){

    let styleA = {
        fontSize :40,
        textAlign : "center",
        backgroundColor : "pink",
        color : "black"
    }


    return(
        <>
        <h1 style = {styleA}>InlineStyle css </h1>

        {/*//first one is {} for javaScript and second one is {{ }} for css*/}
        <h2 style={{fontSize :40, textAlign : "center", backgroundColor : "pink", color : "black"}}> Tis is second Inline CSS </h2>  
        
        {/*  Tis is external css line */}
        <h2 className="Exttxt"> This is External css line</h2>

        <h2 className={modulcss.text}>This line is module css line</h2>
        
        </>
    )
}

export default InlineStyle