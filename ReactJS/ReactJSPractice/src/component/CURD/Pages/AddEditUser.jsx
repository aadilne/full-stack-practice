import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Api from "../Api/Axios";


import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { userSchema } from "../Validations/UsersShema";


import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { Button } from "primereact/button";
import { object } from "yup";



function AddEditUser( { toast }) {

    const navigate = useNavigate()

    const {id} = useParams()

    const { register, handleSubmit, setValue, control,
        formState: { errors } } = useForm({
            resolver: yupResolver(userSchema),
            
        })

        const onSubmit = async (data) => {

            if (id) {
                await Api.put(`/users/${id}` , data);
                toast.current.show({ severity: 'success', summary: "Update", detail: 'User Update Successfully', life: 3000 });
                } else {
                    await Api.post("/users" ,data);
                    toast.current.show({ severity: 'Success', summary: 'Added', detail: 'User added successfully', life: 3000 });
                }
            navigate("/");

            };
            
        


        useEffect(() => {
            if (id) {
                Api.get(`users/${id}`).then((res) => {
                    Object.keys(res.data).forEach((key) => {
                        setValue(key , res.data[key]);
                    });
                });
            }
        } ,[id , setValue]);


    return (
        <div>
            <h1>edit user </h1>

            <form className="p-fluid" onSubmit={handleSubmit(onSubmit)}>
                <div className="field">
                    <label >Name</label>
                    <InputText {...register("name")} />
                    <small className="p-error">{errors.name?.message}</small>
                </div>

                <div className="field">
                    <label >User Name</label>
                    <InputText {...register("username")} />
                    <small className="p-error">{errors.username?.message}</small>
                </div>

                <div className="field">
                    <label>Email</label>
                    <InputText {...register("email")} />
                    <small className="p-error">{errors.email?.message}</small>
                </div>

                <div className="field">
                    <label>Age</label>

                    <Controller
                        name="age"
                        control={control}
                        render={({ field }) => (
                            <InputNumber
                                value={field.value}
                                onValueChange={(e) => field.onChange(e.value)}
                                className={errors.age ? "peer-invalid" : ""} 
                                />
                ) }
               />


                    <small className="p-error"> {errors.age?.message}</small>
                </div>

                <Button label="Save" icon="pi pi-check" />
            </form>

        </div>
    )
}

export default AddEditUser