
// function Props({name , age , add})  // Best aproch
function   Props(prop){

    
    let {name , age = "No" , add = "unknown" , hobbies = []} = prop;    // Destructruing with default vaue in object



    return (
        <div className="mx-30">
            <h1>data comes from Props</h1>
            {/* <p>User Name :- {prop.name} also use</p> */}
            <h2>User Name :- {name} </h2>
            <p>Age:- {age}</p>
            <p>Add:-{add}</p>

            <ul>
                {hobbies.map((value , index)=>(
                    <li key={index}> {value}</li>
                ))}
            </ul>


        </div>
    )
}



export default Props