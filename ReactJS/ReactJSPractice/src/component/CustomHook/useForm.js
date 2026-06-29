
import { useState } from "react";

export default function  useFormAction(initialValues = {} , callback){
    const [values ,  setValues] = useState(initialValues)


    // handle input
    const handleChange = (e) =>{
        const {name , value} = e.target;
        setValues(prev =>({...prec , [name] : value}))

    }

    // handle form submit
    const handleSubmit = (e) => {
        e.preventDefault();
        if(callback) callback(values);

    }

    // Reset Form
    const resetForm = () =>setValues(initialValues)


    return{values , handleChange , handleSubmit , resetForm}
}


// not use yet any component