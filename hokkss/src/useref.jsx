import React from 'react'
import { useState,useRef } from 'react';

function useref() {

    const refElement=useRef("");
    const [name,setName]=useState("Gaurav")
  return (
    <div>
    <h1>Learning ref</h1>
    <input type="text" value={name}/>
    <button onClick={}>Reset</button>
    </div>
  )
}

export default useref;