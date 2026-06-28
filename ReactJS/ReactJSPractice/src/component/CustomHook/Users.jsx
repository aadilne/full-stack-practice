
import useFetch from "./useFetch";

function  Users(){
    const [data , loading , error] = useFetch("https://jsonplaceholder.typicode.com/users")

    if(loading) return <p>loading...</p>
    if(error) return <h3>Error occurred</h3>

    return (
        <div>
            <h2>practice API Data</h2>

            <ul>
                {data.map(user => ( 
                    <li key={user.id}>{user.name}</li>

                ))}
            </ul>
        </div>
    )
}

export default Users