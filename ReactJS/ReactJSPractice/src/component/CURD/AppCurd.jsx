
import { BrowserRouter , Routes , Route ,} from "react-router-dom";

import UserList from './Pages/UserList';
import AddEditUser from './Pages/AddEditUser';

import Layout from "./Layout/Layout";

import { useRef } from 'react';
import { ConfirmDialog } from 'primereact/confirmdialog';
import { Toast } from 'primereact/toast';



function   AppCurd(){

    const toast = useRef (null);


    return (
        <div>
            <BrowserRouter>
            <Toast ref={toast} />
            <ConfirmDialog />
            <Routes>
                <Route element={<Layout />}>
                <Route path="/"  element={<UserList  toast ={toast}/>}/>
                <Route path="/add" element={<AddEditUser toast={toast} />} />
                <Route path="/edit/:id" element={<AddEditUser toast ={toast} />} />
                </Route>
            </Routes>
            
            </BrowserRouter>

        </div>
    )
}

export default  AppCurd