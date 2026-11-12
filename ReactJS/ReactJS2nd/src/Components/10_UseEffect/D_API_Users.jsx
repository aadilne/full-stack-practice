
import { useState , useEffect } from "react"

function D_API_Users() {

    let [users , setUsers] = useState([])


    useEffect(() =>{

        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => setUsers(json))


        return () =>{

        }
    })


  return (
    <div className="w-100 h-70 mx-35 pl-7  bg-gray-700">
        <h1>useEffect Practice</h1>
        <h1>API Users</h1>
        <h2>User List</h2>

        {users.map((u)=>(
            <li key={u.id}>  {u.id} - {u.name} </li>
        ))}
    </div>
  )
}

export default D_API_Users