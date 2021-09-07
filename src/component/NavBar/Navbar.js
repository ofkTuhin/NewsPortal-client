import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './Nav.css'

const Navbar = () => {
    const [news,setNews]=useState([])
    
    useEffect(()=>{
        fetch('http://localhost:3000/getNews')
        .then(res=>res.json())
        .then(data=>setNews(data))
        
    },[news])
    console.log(news)
    const health = news.find(data=>data.category==="Health")
    console.log(health)
    const sport = news.find(data=>data.category==="sport")
    const tech = news.find(data=>data.category==="tech")
  

    return (
        <>
         <nav>
            <div className="container">
               
                    <div className="menuBar">
                    <Link to="/"><div className="logo"><h3>T NEWS</h3></div></Link>
                    
                    <ul>
                        <Link to="/"><li>Home</li></Link>
                       
                            <Link to={`/category/${health.category}`}><li>Health</li></Link>
                            <Link to={`/category/${sport.category}`}><li>sport</li></Link>
                            <Link to={`/category/${tech.category}`}><li>Tech</li></Link>
                            
                           
                        <li>Contact</li>
                    </ul>
                     
                    </div>
               
            </div>
            </nav>
        </>
    );
};

export default Navbar;