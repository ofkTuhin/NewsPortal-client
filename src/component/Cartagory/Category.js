import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './category.css'

const Category = () => {
    const [categoryNews,setCategoryNews]=useState([])
    const {category}=useParams()
    useEffect(()=>{
        fetch(`http://localhost:3000/category/${category}`)
        .then(res=>res.json())
        .then(data=>setCategoryNews(data))
    },[category]
    )
  
    return (
        <div className="container">
            <div className="content">
                <div className="row">
                    
                   {
                       categoryNews.map(data=>
                        <div className="col-6">
                        <div className="newsContent">
                        <div className="newsFront">
                                    <div className="newsTitle"><h4>{data.title}</h4></div>
                                    <div className="newsImg"><img src={data.image}/></div>
                                    <div className="newsAuthor"><small><i>"{data.author}"</i></small></div>
                                    <div className="newsDesc"><p>
                                    
                                    {data.description.slice(0,35)}..
                                    </p></div>
                                    <p><Link to={`/details/${data._id}`}>View more</Link></p>
                                </div>
                        </div>
                        </div>
                        )
                   }
                </div>

            </div>

            
        </div>
    );
};

export default Category;