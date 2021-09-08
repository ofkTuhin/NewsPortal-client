import React from 'react';
import AddProduct from '../../AddProduct/AddProduct';

import TopNews from '../../TopNews/TopNews';

import GetNews from '../GetNews/GetNews';

const Home = () => {
    return (
        <>
         <div className="container">
         <div className="row">
             <div className="col-3">
                 <div className="topNews">
                     
                     <h3>Top News</h3>
                    <TopNews></TopNews>
                 </div>
             </div>
             <div className="col-9">

                 <div className="news">
                     
                     <GetNews></GetNews>
                     
                     
                 </div>
             </div>
             </div>   
         </div>
            
        </>
    );
};

export default Home;