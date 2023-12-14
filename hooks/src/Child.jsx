import React from 'react'
import {useContext} from 'react';
//  import {useContext} from 'react';
import AppContext from './UserContext/userContext'

function Child() {
    // const {name,age}=user;
    const userData=useContext(AppContext);
    console.log(userData)
  return (
    <div>Child=my name is {userData.name} and  my age is{userData.age}.</div>
    
  )
}

export default Child;