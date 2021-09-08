
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';

const AddTopNews = () => {
    
    const [imageUrl,setImageUrl] = useState()
    const { register, handleSubmit,  formState: { errors } } = useForm();
    const onSubmit = data =>{
        const events ={
           title:data.title,
           description:data.description,
           author:data.author,
           category:data.category,
            image:imageUrl
        }
        console.log(data)
    fetch('https://calm-escarpment-98508.herokuapp.com/topNews',{
        method:'POST',
         headers:{'content-type':'application/json'},
         body:JSON.stringify(events)
    })

   }
   
   const handleImageUpload=event=>{
    console.log(event.target.files[0])
    const imageData=new FormData()
    imageData.set('key','ac14fb7fe7d3b9b39f81a751405dbb8e')
    imageData.append('image',event.target.files[0])
    axios.post('https://api.imgbb.com/1/upload',imageData )
    .then(function (response) {
      setImageUrl(response.data.data.display_url);
    })
    .catch(function (error) {
      console.log(error);
    });

  }
    return (
        <div className="container">
              <div className="row">
                
                <div className="col-md-6">    <form onSubmit={handleSubmit(onSubmit)} className="ship-form"  style={{marginTop:"30px"}}>
        {/* register your input into the hook by invoking the "register" function */}
        <div className="form-group">
        <input className="form-control"  {...register("title",{ required: true })}  name="title" placeholder="title" />
        {errors.title && <span>This field is required</span>}
        </div>
        {/* include validation with required or other standard HTML validation rules */}
      

      
      
      <div className="form-group">
      <textarea className="form-control" {...register("description", { required: true })} type="text"  placeholder="description" />
        {errors.description && <span>This field is required</span>}
      </div>
      
        {/* errors will return when field validation fails  */}
        
        <div className="form-group">
        <input className="form-control"  type="file" onChange={handleImageUpload}/>
        </div>
       
        
        <div className="form-group">
        <input className="form-control" type="submit" />
        </div>
      </form></div>
            
            </div>
        </div>
    );
};

export default AddTopNews;