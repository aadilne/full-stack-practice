import { useState, useEffect, useEffectEvent } from "react";

function Auto_Form() {
  let [formData, setFormData] = useState({ name: "" , email: "" });

  const saveData = useEffectEvent(() =>{
    // yaha pr updated value print krege jo ki useEffect me nhi kr rha tha.
    console.log("Form Data:" , formData);
  })

  useEffect(() =>{
    const interval = setInterval(() =>{
        // useEffect me value update nhi hot hai eske liye useEffectEvent ka use krege
       // console.log("Form Data:" , formData);
       saveData();

    },5000)

    return () => clearInterval(interval);
  }, [])
  

  return (
    <div>
      <div>Auto Save Form</div>
      <input type="text" placeholder="Enter Name:-" 
      value={formData.name}
      onChange={(e) => setFormData({...formData , name: e.target.value})}
      />

      <br />
      <br />

      <input type="email" placeholder="Enter Email:-" 
      value={formData.email}
      onChange={(e) => setFormData({...formData , email: e.target.value})}
      />

    </div>
  );
}

export default Auto_Form;
