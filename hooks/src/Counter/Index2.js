import React from 'react'
import { useState } from 'react'
function Index2() {
    const [counter,setCounter]=useState(0);

const handleIncrement=()=>{
    setCounter(counter+1)

}    

  return (
    <div>
         <h1>{counter}</h1>
        <div>
            <button onClick={handleIncrement}>Incres</button>
            
            <button >Decrease</button>
        </div>
    </div>
  )
}

export default Index2