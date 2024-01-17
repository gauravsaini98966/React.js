import React from 'react'
import { Products } from '../Data/Project_Data'

function Projects() {
  return (
    <div className='bg-black px-10 py-20 '>
<h1>My <span>Projects</span></h1>

<div className='flex justify-center gap-20 flex-wrap '>{
  Products.map((data,index)=>{
    return(
    <div key={index} className='Project_1 bg-[#1d1d1d] px-3 py-3 rounded-lg '>
      <img className='rounded-lg' src={data.img}/>
      <h1 className='text-white text-2xl'>{data.Name}</h1>
      <p className='text-white py-2'>{data.p}</p>

      <div className='project_img py-4'>
        <img src={data.img2}/>
        <img src={data.img3}/>
        <img src={data.img4}/>

      </div >
      <div className='project_button py-2'>
        <button>See live</button>
        <button>Source Code</button>
      </div>

      </div>

    )
  })

    
}


</div>
    </div>
  )
}

export default Projects