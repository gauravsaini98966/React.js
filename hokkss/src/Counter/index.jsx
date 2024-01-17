import React from 'react'

function index() {
    let Counter=0;

  return (
    <div>
        <h1>{Counter}</h1>
        <div>
            <button onClick={(e)=>Counter++}>Incres</button>
            <button onClick={(e)=>Counter--}>Decrease</button>
        </div>
    </div>
  )
}

export default index;