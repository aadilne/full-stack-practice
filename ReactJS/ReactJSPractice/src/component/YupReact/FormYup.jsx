import { useForm } from "react-hook-form";
import {registerSchema} from './Schema'
import {yupResolver} from '@hookform/resolvers/yup'


function  FormYup() {
    const {register , handleSubmit , formState} = useForm({resolver : yupResolver(registerSchema)});
    const {errors} = formState;

    const onSubmit = (data) =>{
        console.log(data);
    }

    return (
        <div>
            <h1>Practice Yup form </h1>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input type='text' placeholder='Enter Your Name' {...register("name")} />
                <p className="error">{errors.name?.message}</p>
                <br />
                <input type='number' placeholder='Enter Your Age' {...register("age")} />
                <p classNsme='error'>{errors.age?.message}</p>
                <br />
                <input type='email' placeholder='Enter Your Email' {...register("email")} />
                <p className="error">{errors.email?.message}</p>                        
                <br />
                <input type='password' placeholder='Enter Your Password' {...register("password")} />
                <p className="error">{errors.password?.message}</p> 
                <br />
                <input type='password' placeholder='Confirm Your Password' {...register("confirmPassword")} />
                <p className="error">{errors.confirmPassword?.message}</p> 
                <br />
                <label >Skills</label>
                <input type="checkbox" value="React" {...register("skills")} /> React
                <input type="checkbox" value="Nodejs" {...register("skills")} /> Nodejs
                <input type="checkbox" value="javaScript" {...register("skills")} /> javaScript
                <input type="checkbox" value="java" {...register("skills")} /> java
                <p className="error">{errors.skills?.message}</p>
                <br />
                <button type='submit'>Submit</button>
            </form>

        </div>
    )
}

export default FormYup;
