
import { useState } from "react";

function   Form_Handling(){
    let [name , setName] = useState("");
    let [email , setEmail] = useState("");

    const  handelSubmit = (e) =>{
        e.preventDefault();
        console.log("Name:-" , name);
        console.log("Email:-" , email);
    }

    return(
        <div className="w-100 h-70 mx-35 flex items-center justify-center  bg-gray-700">
            <form onSubmit={handelSubmit}>

                <h1 className="text-3xl font-bold text-center text-red-200">Form Handling</h1>
                
                <label htmlFor="name" >Name:-</label>
                <input className="border  rounded"
                id="name"
                type="text" 
                placeholder="Enter Name" 
                value={name}
                onChange={(e) =>setName(e.target.value)}
                />

                <br />

                <label htmlFor="email"> Email:-</label>
                <input className="border rounded"
                id="email"
                type="email"
                placeholder="Enter Email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
                
                />
                <br />

                <button type="submit" className="border rounded">submit</button>


            </form>

        </div>
    )
}

export default Form_Handling