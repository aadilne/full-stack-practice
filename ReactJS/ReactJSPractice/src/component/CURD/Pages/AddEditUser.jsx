import { useState } from "react";
import { useEffect } from "react";
import { useNavigate , useParams } from "react-router-dom";
import Api from "../Api/Axios";


import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {userSchema} from "../Validations/UsersShema";

function AddEditUser(){


    return (
        <div>
        <h1>edit user </h1>
        </div>
    )
}

export default AddEditUser