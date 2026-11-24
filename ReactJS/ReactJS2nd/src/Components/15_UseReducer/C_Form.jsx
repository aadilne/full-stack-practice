import { useReducer } from "react"

function C_Form() {

    function reducer(state , action){

        return ({
            ...state ,
// yaha property change ho rha hai aur yha value 
            [action.name] : action.value 
        })
    }

    const [formData , dispatch] = useReducer(reducer ,   {name : "" , email : ""
    })
// ye function input pr lgaya hai u me se (e) me name and value aa jaega name and value property ko dedega jo input me name value diye hai
// dispatch function reducer ko de dega
    function handleChange(e) {
        dispatch ({
                    name : e.target.name,
                    value : e.target.value
        })

    }

  return (
    <div>
        <form>
            <label htmlFor="nameR">Enter User Name:</label>
            <input type="text" id="nameR" name='name' value={formData.name} onChange={handleChange} placeholder='User Name' />
            
            <br />
            <label htmlFor="emailR">Enter email ID:</label>
            <input type="email" id="emailR" name='email' value={formData.email} onChange={handleChange} placeholder='email' />

            <p> User Name:-{formData.name} User email:-{formData.email}</p>
        </form>
    </div>
  )
}

export default C_Form