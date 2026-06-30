import { useState , useEffect } from "react"


function   LazyLodingAndSuspenseConponent(){

    const [posts , setPost] = useState([])

    useEffect(() =>{

        const fatchPosts = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            const data = await response.json()
            setPost(data)

        }

        fatchPosts()

    },[])


    return(
        <div>
            <h1>Lazy Loding And Suspense Conponent</h1>

            <h2>Post </h2>
            <ul>
                {posts.map((post) =>(
                    <li key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </li>
                ))

                }
            </ul>
            <br /><br />
            
        </div>
        
    )
}

export default LazyLodingAndSuspenseConponent