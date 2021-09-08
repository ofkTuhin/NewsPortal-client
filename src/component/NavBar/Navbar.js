import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

import './Nav.css'

const Navbar = () => {
  const{login,category} =useContext(UserContext)
   const [loggedInUser,setLoggedInUser]=login
   const[categoryNews,setCategory]=category
    const [admin,setAdmin]=useState([])
    const [news,setNews]=useState([])
    
    // const [healthCategory,setHealth]=useState()
    // const [sportCategory,setSport]=useState()
    // const [techCategory,setTech]=useState()
    // const [categoryNew,setCategoryNews]=useState([])
   
      useEffect(()=>{
        fetch('https://calm-escarpment-98508.herokuapp.com/admin')
        .then(res=>res.json())
        .then(data=>setAdmin(data[0]))

        fetch('https://calm-escarpment-98508.herokuapp.com/getNews')
.then(res=>res.json())
.then(data=>setNews(data))
    
      },[category])
 


console.log(news)
const health=news.find(data=>data.category==="Health")
    const sport=news.find(data=>data.category=="sport")
    const tech=news.find(data=>data.category=="tech")
    const story=news.find(data=>data.category=="story")
    

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
                            <Link to={`/category/${story.category}`}><li>story</li></Link>
                        
       
                        
                          
                               {
                                  admin.email===loggedInUser.email ?  <li><Link to="/admin">admin</Link></li>:null
                               }
                           
                        
                    </ul>
                     
                    </div>
               
            </div>
            </nav>
        </>
    );
};

export default Navbar;