import React, { useEffect, useState } from 'react';
import './news.css'

import { Link } from 'react-router-dom';

const GetNews = () => {
    const [news,setNews]=useState([])
    useEffect(()=>{
        fetch('http://localhost:3000/getNews')
        .then(res=>res.json())
        .then(data=>setNews(data))
    })
    return (
        <div>
            <div className="row">
            {
                news.map(data=>
                    <div className="col-6">
                        
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
                )
            }
            </div>
        </div>
    );
};

export default GetNews;