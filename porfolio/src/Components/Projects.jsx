import React from 'react'
import { Products } from '../Data/Project_Data'

function Projects() {
  return (
    <div className=''>
<h1>My <span>Projects</span></h1>

<div className=''>{
  Products.map((data,index)=>{
    return(
    <div key={index} className=''>
      <img src={data.img}/>
      <h1>{data.Name}</h1>
      </div>
    )
  })

    
}


</div>
    </div>
  )
}

export default Projects