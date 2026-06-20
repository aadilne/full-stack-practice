
//  function   Props({Name ="Gust" , Age =22 , City = "Unknown"}){  // we set default props value

function   Props(prop){       //prop always return object value

     const {Name , Age , City} = prop;      // we can also print like thhis 

    return (

        <>

        <h1>Props (Properties) practice </h1>
        <h2>we Can't change porp value in Component</h2>

        <h3>we can send data in props like this [String , Number , Array , Object , Function]</h3>

        <p>name print using Props {prop.name}</p>

        <h2>Print student details using props </h2>
        <p>Studet Name:-{prop.Name}</p>
        <p>Student Age:-{prop.Age}</p>
        <p>Student City:- {prop.City}</p>

        <p>We can also print using Object Destructring</p>
        <p>Studen Name {Name}</p>

     {/*    <h2>Array Student  Hobbies print </h2>
        <ul>{propHobbies.map((hobby , index) =>(
                <li key = {index}> {hobby} </li>
             ))}
             </ul>
      */}
        </>

    )
}


export  default Props