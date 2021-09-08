import { createContext, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import AddAdmin from "./component/AddAdmin/AddAdmin";
import AddProduct from "./component/AddProduct/AddProduct";
import AddTopNews from "./component/AddTopNews/AddTopNews";
import Admin from "./component/Admin/Admin";

import Category from "./component/Cartagory/Category";
import Home from "./component/Home/Home/Home";
import Navbar from "./component/NavBar/Navbar";
import NewsDetails from "./component/NewsDetails/NewsDetails";
import Login from "./component/SignUp/Login/Login";
import PrivateRoute from "./component/SignUp/PrivateRoute/PrivateRoute";

export const UserContext= createContext()

function App() {
 
  const [loggedInUser,setLoggedInUser]=useState({})
  const [categoryNews,setCategory]=useState({})
  return (
    <div className="App">
   <UserContext.Provider value={{
     login:[loggedInUser,setLoggedInUser],
     category:[categoryNews,setCategory]
   
  }
  }>
   <Router>
      <Navbar/>
      <Switch>
      <PrivateRoute path='addNews'>
      <AddProduct></AddProduct>
      </PrivateRoute>
      <PrivateRoute path='addAdmin'>
      <AddAdmin></AddAdmin>
      </PrivateRoute>
      <PrivateRoute path='addTopNews'>
      <AddTopNews></AddTopNews>
      </PrivateRoute>
      <PrivateRoute path='/details/:_id'>
        <NewsDetails></NewsDetails>
      </PrivateRoute>
      <PrivateRoute path='/category/:category'>
        <Category></Category>
      </PrivateRoute>
      <PrivateRoute path='/admin'>
        <Admin></Admin>
      </PrivateRoute>
      <Route path='/login'>
        <Login></Login>
      </Route>
      <Route path='/'>
        <Home></Home>
      </Route>
        

      
      </Switch>
    </Router>
   </UserContext.Provider>
    </div>
  );
}

export default App;
