

function    Function_And_Events(){

    function  Name(){

        return "Aadil Nezam"
    }

    function  NameTwo(name){

        return name
    }

    const  AlertMessage = () =>{
        alert("Button was clicked");
    }

    let nam ="Nezam Aadil"

    const getValue =(event) =>{
        console.clear()
       console.log( event.target.value);

    }

    return(
        <div>
            <h1>Functin and Events</h1>

            <p>student Name:- {Name()}</p>

            <p>second Student Name:-{NameTwo(nam)}</p>

            <button onClick={AlertMessage}>Alert Button</button>

            <button onClick={() =>{alert("button click in line function")}}>inline button</button>
            
            <br />

            <input type="text" placeholder="Enter your Name:-" onChange={getValue} />



        </div>
    )
}

export default Function_And_Events