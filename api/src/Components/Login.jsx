import React from 'react'
import UserContext from '../Context/UserContext';
 import {userState,useContext} from 'react';
  
 

function Login() {


  
  return (
    <>
    <h2>Login</h2>
    <input type='text' placeholder='username'/>
    <input type="text" placeholder='password' />
    <button onClick={handleSubmit}>Submit</button>
    </>
  )
}

export default Login