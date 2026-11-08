import { useRef } from "react"

function  UseRef_UncontroledForm(){

    const useName = useRef();
    const useEmail = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Name:-" , useName.current.value);
        console.log("Email:-" , useEmail.current.value);
    }

    return(
       <div className="w-100 h-70 mx-35 border border-red-700 mt-7 flex flex-col items-center justify-center  bg-gray-700">

        <p>useRef is uncontroled components</p>
        <form onSubmit={handleSubmit}>
            {/* yaha pr ref={} attribute automatice input ka value leta hai aur useName ko value de deta hai useState ke trh nhi hai ye phle lo phri value={name}se do */}
       < input type="text" ref={useName} placeholder="Enter Name"  />
       <br />
       <input type="text" ref={useEmail} placeholder="Enter Email" />
       <br />
       <button type="submit">submit</button>
       </form>

       </div>
       
    )
}

export default UseRef_UncontroledForm