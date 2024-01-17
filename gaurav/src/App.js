import { createContext } from "react";
import React from 'react'
import Home from "./Counter/Home";
import { useState } from "react";

function App() {
  const name="gaurav";
  const age=12
const [state,setstate]=useState(true)
  return (
    <>
     <button onClick={(e)=>setstate(!state)}>Toggle</button>
    {state?<Home/>:""}
   
  {/* <Home/> */}
    </>
  )
}

export default App
