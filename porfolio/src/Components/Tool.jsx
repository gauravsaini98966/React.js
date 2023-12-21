import React from 'react'
import {Tools} from '../Data/Tools_Data';

function Tool(){
  return (
    <div  className='Tool bg-black'>
        <h1  className='text-4xl font-medium text-white text-center'>Tools I<span > Use</span></h1>
    
    <div className='Tools'>{
        Tools.map((product,index)=>{
return(
    <div data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="1000" key={index} className='tools_img'>
        <img src={product.img}/>
        <h1 className='text-xl'>{product.name}</h1>

    </div>
)
        })

    }
       

    </div>

    </div>
  )
}

export default Tool;