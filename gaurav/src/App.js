import { createContext } from "react";


const data=createContext();
const data1= createContext();
// import child from "./child";
import React from 'react'

function App() {
  const name="gaurav";
  const age=12

  return (
    <>
    <data.Provider value={name}>
      <data1.Provider value={age}>

      </data1.Provider>

    </data.Provider>
    </>
  )
}

export default App
export {data,data1};