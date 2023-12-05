import React from 'react'
import Reactangle from '../Picture/Rectangle.png'
import {Products_Data} from '../Short_Components/Fifth'
function Fifth_page() {
  return (
    <div className='Fifth_page'>
       <div className='Sevnth_page_1'>
        <img src={Reactangle}/>
        <h3>This Month</h3>
      </div>
      <div className='Sevnth_page_2'>
      <h1>Best Selling Products </h1>

        <div className='fifth_page_button' >    
      <button>View All</button>
        </div>
     
      </div>

<div className='fifth_page_3'>{
   Products_Data.map((product,Data)=>{
    return (
      <div key={Data} className='fifth_page_3_Img_text'>
        <div className=''>
        <img src={product.Img} />
        </div>
    

      <h3>{product.name}</h3>
      <div className='fifth_page_3_prize'>
        <h4>{product.prize} <span>{product.prize2}</span></h4>
       
      </div>

      <div className='fifth_page_3_stars'>
        <img src={product.Img2} />
      </div>


      </div>
    )
   })
}
  

</div>
      
     
    </div>
  )
}

export default Fifth_page