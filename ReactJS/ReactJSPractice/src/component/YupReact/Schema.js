
import * as Yup from 'yup';

export const registerSchema = Yup.object({
    name : Yup.string().required("Name is Required").trim().lowercase()
    .test("no-admin" , "Admin not allowed", value => value !=="admin"),

    email : Yup.string().email("Invalid Email").required("Email is Required")
    // .test("check Email" , "Email already exists" , async value =>{
    //                                                                 const res  = await fetch(`https://jsonplaceholder.typicode.com/users?email=${value}`)
    //                                                                 const data = await res.json();
    //                                                                 return data.length === 0;
    //                                                             })
    
    .when("age" ,{
        is: age => age>=25,
        then : schema => schema.email("Invalid Email").required("Email is required if age is 25 or above"),
        otherwise: schema => schema.notRequired(),
    })
    ,

    password : Yup.string().min(6 , "password must be at least 6 characters")
    .required("password is Required ")
    .matches(/[A-Z]/ , "At least one upperCase latter")
    .matches(/[0-9]/ , "At least one number"),

    confirmPassword : Yup.string().oneOf([Yup.ref("password") ] , "pawword must be match").required("Confirm password is Required"),
    
    age : Yup.number().min(18 , "Age At least must be 18").required("Age is requried"),

    skills : Yup.array().of(Yup.string()).min(2 , "select at least 2 skill").max(3 , "you can select at most 3 skill")
}) 

