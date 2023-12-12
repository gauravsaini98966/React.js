// import React, { useEffect } from 'react'
import Usestate from './Usestate'
import { useState,useEffect} from 'react'

function UseEffects() {
  const[widthCount,setWidthCount]=useState(window.screen.width);


  const currentScreenWidth=()=>{
    setWidthCount(()=>window.innerWidth)
  }

  useEffect(()=>{
    window.addEventListener("resize", currentScreenWidth)
    return()=>{
      window.removeEventListener("resize",currentScreenWidth);
    }
  })

  return (
    <div>
      <h2>the size of the window {widthCount}</h2>
      <h2>the size of the window {widthCount}</h2>
    </div>
  )
}

export default UseEffects