import React from 'react';
import { useForm } from "react-hook-form";

const AddAdmin = () => {
    const { register, handleSubmit,  formState: { errors } } = useForm();
    const onSubmit = data =>{
        const events ={
          
           
        }
        console.log(data)
    fetch('https://calm-escarpment-98508.herokuapp.com/addAdmin',{
        method:'POST',
         headers:{'content-type':'application/json'},
         body:JSON.stringify(data)
    })

   }
    return (
        <div>
            <div className="addNews">
           <div className="row">
                
                <div className="col-md-6">    <form onSubmit={handleSubmit(onSubmit)} className="ship-form"  style={{marginTop:"30px"}}>
        {/* register your input into the hook by invoking the "register" function */}
        <div className="form-group">
        <input className="form-control"  {...register("name",{ required: true })}  name="name" placeholder="name" />
        {errors.title && <span>This field is required</span>}
        </div>
        {/* include validation with required or other standard HTML validation rules */}
      <div className="form-group">
      <input className="form-control" {...register("email", { required: true })} type="text"  placeholder="email" />
        {errors.category && <span>This field is required</span>}
      </div>

     
      
     
       
        
        <div className="form-group">
        <input className="form-control" type="submit" />
        </div>
      </form></div>
            
            </div>
        </div>
        </div>
    );
};

export default AddAdmin;