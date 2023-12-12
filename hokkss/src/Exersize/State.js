import React, { useState } from 'react'
// import { ReactDOM } from 'react'

function State() {
    const[color,setColor]=useState({
        brand:"ford",
        model:"mustang",
        year:"1964",
        color:"red"
    });
    const updataColor=()=>{
        setColor(previousState=>{
            return{...previousState,color:"blue"}
        })
    }

  return (
    <div>

 <h1>car brand{color.brand} {color.model}{color.year} {color.color}</h1>
 <button onClick={updataColor} type='button'>button</button>
    </div>
  )
}

export default State