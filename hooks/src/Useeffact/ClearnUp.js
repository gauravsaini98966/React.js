import React from 'react'
import { useState,useEffect } from 'react'

function ClearnUp() {
    const[widthCount,setwidthCount]=useState[window.screen.width]
  return (
    <div>
        <h2>the size of the window is <span> {widthCount}</span></h2>
    </div>
  )
}

export default ClearnUp