
import { Link, Outlet } from "react-router-dom"

function   RouterProdect(){

    return (
        <>
        <h1>Product Page </h1>

        <nav>
            <Link to="RouterNestedPhone">Phone</Link>
            <Link to="RouterNestedLaptop">Laptop</Link>
        </nav>

        <Outlet />

        </>
    )
}

export default RouterProdect