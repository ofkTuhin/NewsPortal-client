import React, { useContext, useState } from 'react';

import firebase from 'firebase/compat/app';
import 'firebase/auth';
import { firebaseConfig } from './Firebase.config';
import { UserContext } from '../../../App';
import { useHistory, useLocation } from 'react-router';
import { GoogleAuthProvider,getAuth, signInWithPopup,createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";

if(!firebase.apps.length){firebase.initializeApp(firebaseConfig);}

const Login = () => {
    const [newUser,setNewUser] =useState(false)
    const [userInfo,setUserInfo] =useState(
      {
        issigndIn: false,
        name: '',
        email: '',
        photo: '',
        password: '',
        error:'',
        success: false,
      }
    )

    const {login,category}=useContext(UserContext)
    const [loggedInUser,setLoggedInUser]=login

    const history=useHistory()
    const location=useLocation()
    let { from } = location.state || { from: { pathname: "/" } };
  
    // const provider = new firebase.auth.GoogleAuthProvider();
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
  
   
  
    const handleSigned=()=>{
      
  
  
     
      signInWithPopup(auth,provider)
    .then((result) => {
  
     console.log(result)
     const {displayName, email,photoURL}=result.user
     console.log(displayName, email,photoURL)
     const signInuser ={
      issigndIn: true,
      name: displayName,
      email: email,
      photo: photoURL
    }
    
    setUserInfo(signInuser)
    setLoggedInUser(signInuser)
    history.replace(from);
    // setToken()
   
    })
    
   
    return handleSigned;
  
      
    };

  
   
  // Email and password validation
    const handleBlur =(e)=>{
      let isFormvalid =true;
    
      if(e.target.name==='email'){
  
        isFormvalid = /\S+@\S+\.\S+/.test(e.target.value)
       
  
      }
      if(e.target.name==='password'){
  
        const passwordLength =e.target.value.length>=8
  
        const regexPasswordValid = /[0-9]/.test(e.target.value);
        isFormvalid=regexPasswordValid && passwordLength
  
      }
      if (isFormvalid){
       
        const updateUserInfo ={...userInfo}
        updateUserInfo[e.target.name]=e.target.value
        setUserInfo(updateUserInfo)
      
        
      }
  
    }
     // handle submit event
     const handleSubmit =(e)=>{
       if(newUser && userInfo.email && userInfo.password){
        
                createUserWithEmailAndPassword(auth, userInfo.email, userInfo.password)
        .then(res => {
          // Signed in 
          const updateUserInfo ={...userInfo}
          updateUserInfo.photo=res.photoURL;

  
  
          updateUserInfo.error = '';
          updateUserInfo.success =true;
          setUserInfo(updateUserInfo)
          
        //   userInfoUpdate(userInfo.name,userInfo.photo)
          
       
          // ...
        })
        .catch((error) => {
          const updateUserInfo ={...userInfo}
  
          updateUserInfo.error = error.message;
          updateUserInfo.success=false;
          setUserInfo(updateUserInfo)
         
       
          // ..
        });
         console.log('submit')
       }
       if (!newUser && userInfo.email && userInfo.password){
       signInWithEmailAndPassword(auth,userInfo.email,userInfo.password)
        .then(res => {
          const updateUserInfo ={...userInfo}
          updateUserInfo.error = '';
          updateUserInfo.success =true;
          setUserInfo(updateUserInfo)
          setLoggedInUser(updateUserInfo)
          history.replace(from);
          console.log(res.user)
          // Signed in
          
          // ...
        })
        .catch((error) => {
          const updateUserInfo ={...userInfo}
          updateUserInfo.error = error.message;
          console.log(updateUserInfo.error)
          updateUserInfo.success=false;
          setUserInfo(updateUserInfo)
        });
       }
       e.preventDefault()
  
  
    }
  
//     const userInfoUpdate=(name,photo)=>{
//       const user = firebase.auth().currentUser;
  
//   user.updateProfile({
//     displayName: name,
//     photoURL:photo
    
//   }).then(function() {
//     // Update successful.
//   }).catch(function(error) {
//     // An error happened.
//   });
//     }
    return (
        <div className="container">
             <div style={{textAlign: 'center'}}>
      
  
      {
       userInfo.issigndIn && <div className="info">
       <h3>name: {userInfo.name}</h3>
      <h3>email: {userInfo.email}</h3>
      <img src={userInfo.photo } alt='info'></img>
      </div>
 
     }
 
     <div className="login-form">
      <h2>Sign up Form</h2> 
       
       <form onSubmit={handleSubmit}>
        { newUser&&<div className="form-group"><input className="form-control" type="text" name="name" placeholder="Enter your name" onBlur={handleBlur} required></input></div>}
         <br></br>
         <input className="form-control"  type="email" name="email" placeholder="Enter your email address" onBlur={handleBlur} required></input>
         <br></br>
         <input className="form-control"  type="password" name="password" placeholder="Enter your password" onBlur={handleBlur} required></input>
         <br></br>
        { newUser?<input type="submit" className="button btn" value="sign up" placeholder="" ></input>:<input type="submit" className="button btn" value="sign in" placeholder=""></input>}
         <br></br>
         {newUser ? <p>Already have account?<span onClick={() => setNewUser(!newUser)} style={{
              color: 'blue',
              cursor: 'pointer'

            }}>login</span></p> : <p>create an account?<span onClick={() => setNewUser(!newUser)} style={{
              color: 'blue',
              cursor: 'pointer'

            }}> Sign up Here</span></p>}
         
       </form>
       {userInfo.issigndIn?<button className="google" >Sign out</button>:<button  className="google"  onClick={handleSigned}>Sign in With Google</button>
 
}
      {
        userInfo.success ? <p style={{color:'green',cursor:'pointer'}}>{newUser?"create":'login'}  success</p>: <p style={{color:'red'}}>{userInfo.error}</p>
      }
      

       
      
     
 
      
     </div>
     </div>
        </div>
    );
};

export default Login;