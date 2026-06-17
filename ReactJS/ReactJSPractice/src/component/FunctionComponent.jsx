

function  FunctionComponent(){

    function getName(){

        return "Aadil Nezame";
    }


    function  functionPara(addA){

        return addA;
    }


    let mobNum = 7782899686;
    let occpution = " Good Boy"

    function      functionVar(mob , occ){

        return [mob , occ];

    }

    const arrFunction = (yd) =>{
        return yd;

    }

    function       handleClick(){
        alert("button was clicked");
    }

    function   namePrint(event){
        console.clear()
        console.log("value:-" , event.target.value)
    }

    const handelMouseHover = () => console.log("mouse is over on text")
    const  handleOnClick = () => console.log("text clicked")


    return (
        <>
        <h1>This is function practice</h1>
        <h2>My name is { getName()}</h2>

        <h1>This is function parametar</h1> 
        <h2>My Add:- {functionPara("Bihar")} </h2>
        <h2>My second Add:- {functionPara("Patna")}</h2>


        <h1>This is function Variable parametar</h1>
        <h2>Studet mobile number {functionVar( mobNum , occpution)}</h2>

        <h1>This is Aerow function use</h1>
        <h2>What is your dream? {arrFunction("Be FullStack Devloper")}</h2>
        
        <h1>Event handle</h1>
        <button onClick={handleClick}>click me</button>
        <button onClick={ () => { alert("button was clicked_2")}}> click_me_2</button>
        <br />

        <label  id="name">Student Name</label>
        <input type="text" placeholder="Enter Your Name" id="name" onChange={namePrint} />

        <p onMouseOver={handelMouseHover}  onClick={handleOnClick}>AADIL NEZAM</p>
        

        </>

    )

}


export default FunctionComponent