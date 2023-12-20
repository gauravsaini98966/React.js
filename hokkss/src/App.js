import logo from './logo.svg';
import './App.css';
import State from './Exersize/State';
import { useState,useRef } from 'react';

function App() {
  // ----ref--manipulate the dom---
    const refElement=useRef("");
    const [name,setName]=useState("Gaurav")
    console.log(refElement)
    function Reset(){
      setName("")
      refElement.current.focus()
    }
    function handlinput(){
      refElement.current.style.color="red";
      refElement.current.value="wrong";
    }
  return (
    <div>
    <h1>Learning ref</h1>
    <input ref={refElement} type="text" value={name} onChange={(e)=>setName(e.target.value)} />
    <button onClick={Reset}>Reset</button>
    <button onClick={handlinput}>Handle input</button>
    </div>
  );
}

export default App;
