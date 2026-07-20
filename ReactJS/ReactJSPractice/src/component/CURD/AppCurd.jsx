
import { BrowserRouter , Routes , Route ,} from "react-router-dom";

import UserList from './Pages/UserList';
import AddEditUser from './Pages/AddEditUser';

import Layout from "./Layout/Layout";



function   AppCurd(){


    return (
        <div>
            <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                <Route path="/"  element={<UserList />}/>
                <Route path="/add" element={<AddEditUser />} />
                <Route path="/edit/:id" element={<AddEditUser />} />
                </Route>
            </Routes>
            
            </BrowserRouter>

        </div>
    )
}

export default  AppCurd