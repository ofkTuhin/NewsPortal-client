import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const NewsDetails = () => {
   
    const [newsInfo,setNewsInfo]=useState([])
    const {_id}=useParams()
    useEffect(()=>{
       fetch('http://localhost:3000/newsDetails/'+_id)
       .then(res=>res.json())
       .then(data=>setNewsInfo(data))
    },[])
    return (
        <div className="container">
           <div className="newsDetails">
               
               <div className="newsDetailsTitle">
               <h2>{newsInfo.title}</h2>
               </div>
               <div className="newsDetailsImg">
                   <img src={newsInfo.image}></img>
               </div>
               <div className="author">
                   <small><i>{newsInfo.author}</i></small>
               </div>
               <div className="newsDetailsDesc">
                   <p>
                       {newsInfo.description}
                   </p>
               </div>

           </div>
        </div>
    );
};

export default NewsDetails;