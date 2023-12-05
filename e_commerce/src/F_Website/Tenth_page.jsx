import React from 'react'
import {  Service } from '../Short_Components/Tenth'

function Tenth_page() {
  return (
   <>



<div className='services'>{
 Service.map((product,index)=>{
return(
   <div key={index} className='services1'>
      <div className='Service1_1'>
          <img src={product.img} />
          </div>
          <h1>{product.name}</h1>
          <p>{product.name2}</p>     
   </div>
)
 })

}
           
            </div>
   
   
   </>
  )
}

export default Tenth_page;