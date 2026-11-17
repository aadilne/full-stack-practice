
function GrandParent(){
     
    const useName = "Aadil Nezam";

    return(
        <div>

            <Parent Name = {useName} />

        </div>
    )
}
// prop name and parent parameter ka name same hona chahiye
function Parent({Name}){

    return(
        <div>
            <Child Name = {Name} />
        </div>
    )
}

function Child({Name}){
    return(
        <div>
            <p>User Name is :-  {Name}</p>
        </div>
    )
}

function Prop_Drilling(){

    return(
        <div>
            <p>Prop Driling Practice</p>
            <GrandParent />

        </div>
    )
}

export default Prop_Drilling
