import React from 'react';
import {useState,useEffect} from 'react';
// import Usestate from '../States/Usestate';

function Useeffact() {
    const[count,setCount]=useState(0);
    const[calculation,setcalculation]=useState(0);

    useEffect(()=>{
        setcalculation(()=>count*2);
    },[count])
  return (
    <div>
        <button onClick={()=> setCount((c)=>c+1)}></button>
        <p>{calculation}</p>
    </div>
  )
}

export default Useeffact