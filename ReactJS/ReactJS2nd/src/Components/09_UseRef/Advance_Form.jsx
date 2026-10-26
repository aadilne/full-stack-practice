import { useState } from "react"

function Advance_Form(){

    let [formData , setFormData] = useState({
                                            gender : "",
                                            country : "India",
                                            agree : false

    })

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(formData);
    }

    const handleChange = (e) =>{
        let {name , type , value , checked} = e.target
        setFormData((prev) => ({
            ...prev , [name] : type === "checkbox" ? checked : value
        }))

    }


    return(
        <div className="mx-35 mt-5 bg-gray-950 w-100 h-70 flex flex-col  items-center justify-center border border-red-700">

            <form onSubmit={handleSubmit} >
                <h1 className="text-2xl text-red-200 font-bold">Advance Form Handling</h1>

                <label className="text-xl border border-green-700" >

                    <input type="radio" name="gender" value="Male"
                    checked={formData.gender === "Male"}
                    onChange={handleChange} />
                    Male
                </label>

                <label className="text-xl ml-3 border border-green-700"  >

                    <input type="radio" name="gender" value="FeMale" 
                    checked={formData.gender === "FeMale"}
                    onChange={handleChange}/>
                    Female
                </label>

                <br />
                <label className="text-2xl">
                    Countery
                    <select  className="text-xl border border-green-700"
                    name="country" value={formData.country} 
                    onChange={handleChange}>
                        <option value="India">India</option>
                        <option value="Pakistan">Pakistan</option>
                        <option value="Nepal">Nepal</option>
                        <option value="America">America</option>
                        <option value="Canada">Canada</option>
                    </select>
                </label>

                <br />

                <label className="text-xl border border-green-700" >
                    <input type="checkbox" name="agree" onChange={handleChange} 
                    checked={formData.agree} />
                    I agree to terms and conditions
                </label>

                <br />
                <button className="border border-yellow-700" type="submit">Submit</button>

                <br />

            </form>
            

        </div>
    )
}

export default Advance_Form