import React from 'react'
import { useContext } from 'react';
//  import {useContext} from 'react';
import {AppContext} from './UserContext/userContext'

function Child(user) {
    const {name,age}=user;
    const userData=useContext(AppContext);
    console.log(userData)
  return (
    <div>Child=my name is {name} and  my age is{age}.</div>
    
  )
}

export default Child