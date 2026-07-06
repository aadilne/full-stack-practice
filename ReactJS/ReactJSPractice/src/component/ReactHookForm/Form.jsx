
import {useForm} from 'react-hook-form'
import {DevTool} from '@hookform/devtools'
import './Form.css'

function Form() {
    const {register, handleSubmit , control , formState} = useForm();
    const {errors} = formState;


    const onSubmit = (data) =>{
        console.log(data);
    }


    return (
        <div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor='Name'>Name</label>
                <input type='text' id='Name' placeholder='Enter Your Name'  {...register('Name' , 
                                                                  {required : "Name is Required"} ) } />
                <p className="error">{errors.Name?.message}</p>
                <br />

                <label htmlFor='Email'>Email</label>
                <input type='email'  id='Email' placeholder='Enter Your Email'  
                {...register('Email' , { required : "Email is Required" , 
                    pattern : {
                        value :/^[^@ ] +@[^@ ]+\.[^@ .] {2,}$/,
                        message : "invalid Email"
                    } })}  />
                    <p className='error'>{errors.Email?.message}</p>
                <br />

                <label htmlFor='Age'>Age</label>
                <input type='number'  id='Age'  placeholder='Enter Your Age' 
                 {...register('Age' , 
                    {required : "Age is Required" ,
                    ValueAsNumber : true,
                    min :{
                        value :18,
                        message : "Age must be at least 18"
                    },
                    max :{
                        value : 30,
                        message : "Age must be less than 99"
                    }
                })} />
                <p className="error">{errors.Age?.message}</p>
                <br />
                <br />

                <button type='submit'>Submit</button>

                <DevTool control={control} placement="top-right" />
            </form>
        </div>
    )
}


export default Form;
