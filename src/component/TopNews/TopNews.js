import React, { useEffect, useState } from 'react';

const TopNews = () => {
    const [topNews,setTopNews]=useState([])
    useEffect(()=>{

        fetch('http://localhost:3000/getTopNews')
        .then(res=>res.json())
        .then(data=>setTopNews(data))
    },[])
    return (
       <>
       {
          topNews.map(data=><div className="top-News">

              <div className="topImg">
                  <img src={data.image}/>

              </div>
              <div className="topTitle">
                  <h6>{data.title}</h6>
              </div>
          </div>)
       }
       </>
    );
};

export default TopNews;