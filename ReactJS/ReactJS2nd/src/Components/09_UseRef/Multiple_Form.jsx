import { useState } from "react"

function        Multiple_Form() {

    let [formData , setFormData] = useState({name : "",
                                    email : "",
                                    age : "" })

    
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(formData);
    }

 // This block of function i have to understad
    const handelChange = (e) => {
        const { name , value} = e.target;
        setFormData((prev) => ({
            ...prev , [name] : value
        }))

    }



    return(
        <div className="mx-35 mt-5 bg-gray-950 w-100 h-70 flex flex-col gap-2 items-center justify-center border border-red-700">
            <h1 className="text-2xl text-red-200 font-bold ">Multiple Form Practice</h1>

            <form  onSubmit={handleSubmit}>
            <div>
            <label className="text-xl" htmlFor="name">Name:-</label>
            <input className="text-xl border border-green-700" 
            type="text" name="name" id="name" placeholder="Enter your Name:-"
            value={formData.name}
            onChange={handelChange}
            />
            </div>

            <br />
            <div>

            <label className="text-xl" htmlFor="email">Email:-</label>
            <input className="text-xl border border-green-700 " 
            type="email" name="email" id="email" placeholder="Enter your Email" 
            value={formData.email}
            onChange={handelChange}
            />

            </div>

            <br />

            <div>
            <label className="text-xl" htmlFor="age">Age:-</label>
            <input className="text-xl border border-green-700" 
            type="number" name="age" id="age" placeholder="Enter Age" value={formData.age} 
            onChange={handelChange}
            />
            </div>

            <button type="submit">Submit</button>

            </form>


        </div>
    )
}

export default Multiple_Form