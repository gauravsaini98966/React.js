import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

function Home() {
    const [Counter,setCounter]=useState(0);

    useEffect(()=>{
        console.log("Couter Mounter");

        return function(){
            console.log("Unmout Counter")
        }
    },[])

    useEffect(()=>{
        console.log("User updata count",Counter);

        return()=>{
            console.log("counter useeffact return",Counter)
        }
    },[Counter])
      const handleSubmit=()=>{
            setCounter(Counter+1)
            }
        
            const handDec=()=>{
                if(Counter==0)
                return;
                setCounter(Counter-1)
      }
  return (
    <div>
        <h1>{Counter}</h1>
        <div>
            <button onClick={handleSubmit}>Incrment</button>
            <button  onClick={handDec}>Decrement</button>
        </div>

    </div>
  )
}

export default Home