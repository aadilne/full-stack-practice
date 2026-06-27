import { useState , useEffect , useEffectEvent } from "react";

function   UEFAutoSaveForm(){

    const [formData , setFormData] = useState({name:"" , email:""})

    const saveData = useEffectEvent(() =>{
        console.log("Form Data:" , formData)
    })

   /* const saveData = () =>{
        useEffectEvent(() =>{
            console.log("Form Data:" , formData);
        });
    } */

    useEffect(() =>{
        const interval = setInterval(()=>{

            saveData()
        },3000)

        return () => clearInterval(interval)

    }, [])




    return (
        <>
        <h1>Auto Save Form</h1>
        <form>
            <input type="text" placeholder="Name"  value={formData.name} 
            onChange={(e) => setFormData({...formData , name: e.target.value})}/>
            <br /> <br />

            <input type="email" placeholder="Email"  value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})} />

        </form>
        </>
    )
}

export default UEFAutoSaveForm