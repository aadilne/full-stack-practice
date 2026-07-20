
import { Outlet } from "react-router-dom"
import Header from "../Components/Header"

function Layout(){

    return (
        <div>

            <Header />

            <div className="p-4"> 
                <Outlet />
            </div>

        </div>
    )
}

export default Layout