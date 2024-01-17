import React from 'react'
import { useState } from 'react';

function index() {
    const [Counter,setCounter]=useState(0)
//    console.log(value)
const handleIncrement=()=>{
setCounter(Counter+1)
// console.log(Counter)
}

  return (
    <div>
        <h1>{Counter}</h1>
        <div>
            <button onClick={handleIncrement}>Incres</button>
            
            <button >Decrease</button>
        </div>
    </div>
  )
}

export default index;