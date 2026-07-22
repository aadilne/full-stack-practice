
import { useState , useEffect } from "react"

import Api from "../Api/Axios";


import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';


import { Button } from 'primereact/button';

import { useNavigate } from "react-router-dom";

import { confirmDialog } from 'primereact/confirmdialog';
        

function UserList({ toast }){

    const [users , setUsers] = useState([])

    const navigate = useNavigate();

    const featchUsers = async () =>{
        const res = await Api.get("/users")
        console.log (res);
        setUsers(res.data)
    }

    useEffect(() =>{

       featchUsers() ;

    } , [])

    const deleteUser = (id) => {

        confirmDialog({
            message : "Are you sure you want to delte this user?",
            header : "Delete Confirmation",
            icon : "pi pi-exclamation-triangle",
            accept : async () => {
                await Api.delete(`/users/${id}`);
                toast.current.show({ severity: 'info', summary: 'deleted', detail: 'User deleted successfully', life: 3000 });
                featchUsers();
            },
        });

    };

    const actionTemplate = (rowData) =>(
        <>
        <Button icon = "pi pi-pencil" className="p-button-sm p-button-warning mr-2" 
        onClick={() => navigate(`/edit/${rowData.id}`)}/>

        <Button icon ="pi pi-trash" className="p-button-sm p-button-danger" 
          onClick={() => deleteUser(rowData.id)} 
        />
        </>
    )


    return (
        <div className="p-4">
        <div className="flex justify-content-between" >
            <h1> Users </h1>
            <Button label ="Add User"  icon="pi pi-plus" size="small" onClick={() => navigate("/add")} />
        </div>
    
    <DataTable value={users} 
    showGridlines 
    stripedRows 
    paginator rows={5}
    size="small"
    filterDisplay="row"
    >
    <Column field="name" header="Name"  filter filterPlaceholder="Search" sortable></Column>
    <Column field="username" header="Username"  filter filterPlaceholder="Search" sortable></Column>
    <Column field="email" header="Email"  filter filterPlaceholder="Search" sortable></Column>
    <Column field="age" header="Age"  filter filterPlaceholder="Search"></Column>
    <Column header="Action"  body={actionTemplate} className="w-[13%]" ></Column>
    </DataTable>
    

        </div>
    )
}

export default UserList