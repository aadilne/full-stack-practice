import { useState } from "react"


function    FormHandling(){
   
    // const [name , setName] = useState("")
    // const [email , setEmail] = useState("")

    //  const handleSubmit = (e) => {
    //     e.preventDefault()
    //     console.log("Name:" , name );
    //     console.log("Email" , email);
    //  }

     // Multi input form
   /*  const [formData , setFormData] = useState( {name:"",
                                                  email: "",
                                                  age:""
                                                })


        
        const   handleSubmitA = (e) =>{

            e.preventDefault()
            console.log( formData);
        }

        const   handleChange = (e) => {
            const {name , value} = e.target;
            setFormData((prev) => ({...prev ,[name]:value }))

        }
            */


    // Advanced Form

        const [formData , setFormData] = useState({
                                                    gender:"",
                                                    agree:"false",
                                                    country:"India"

                                                      })

        const  handleSubmitB = (e) =>{

            e.preventDefault();
            console.log(formData);
        }

        const handleChange = (e) =>{
            const {name , type , value, checked} = e.target; 
            setFormData((prev) => ({
                ...prev , [name] : type === "checkebox" ? checked : value
            }))
        }




    return (
        <>
      {/*  <h1>Form Handling</h1>

        <form onSubmit={handleSubmit}>
            <h2>Simple Form</h2>

            <label>Name:</label>
            <input type="text" value={name}   onChange={(e) => setName(e.target.value)} />
            <br />

            <label>Email:</label>
            <input type="email" value={email}   onChange={(e) => setEmail(e.target.value)} />
            <br />

            <button type="submit">Submit</button>

        </form>
      */}   


        <h1>Multiple Form</h1>
  {/*     <form onSubmit={handleSubmitA}>
            <h2>Multiple Input Form</h2>

            <label >name:</label>
            <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
            <br />

            <label>Email:</label>
            <input type="email" name="email" placeholder="email" value={formData.email} onChange={handleChange} />
            <br />
            
            <label> Age:</label>
            <input type="number" name="age" placeholder="Age" value={formData.age} onChange={handleChange}/>

            <button type="submit">submit</button>


        </form>   */}  


        <h1>Advance Form wit check Box Raion button </h1>

        <form onSubmit={handleSubmitB} >
            <label >
                <input type="radio" 
                name="gender" 
                value="male" 
                checked={formData.gender ==="Male"} 
                onChange={handleChange} />
            Male</label>

            <label >
                <input type="radio" name="gender" value="Female" checked={formData.gender ==="Female"} onChange={handleChange} />
            Female</label>
            <br />

            <label> Country 
                <select name="Country" onChange={handleChange} value={formData.country}>
                    <option value="India">India </option>
                    <option value="USA">USA </option>
                    <option value="UK">UK</option>
                </select>
            </label>
            <br />

            <label > I agree to term and condition
                <input type="checkbox" name="agree" checked={formData.agree} onChange={handleChange} />
            </label>

            <button type="submit">submit </button>


        </form>

        </>
    )
}


export default  FormHandling