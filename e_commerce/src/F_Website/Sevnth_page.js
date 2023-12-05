import React from 'react'
import Reactangle from '../Picture/Rectangle.png'
import {Data} from '../Short_Components/Sevnth_Short'
import Left_Arrow from '../Picture/Left Arrow.png'
import Right_Arrow from '../Picture/Right Arrow.png' 


function Sevnth_page() {
  return (
  <>
    <div className='Sevnth_page'>
      <div className='Sevnth_page_1'>
        <img src={Reactangle}/>
        <h3>Our Products</h3>
      </div>
      <div className='Sevnth_page_2'>
      <h1>Explore Our Products </h1>

        <div className='Sevnth_page_2_imgs' >
          <button>View All</button>

        </div>
     
      </div>

    </div>


    <div className='Sevnth_page_3'>{
      Data.map((product,index)=>{
        return(

          <div className='Sevnth_page_3_img_text_all' >

          <div key={index} className='Sevnth_page_3_img_text'>

            <div className='Sevnth_page_3_imgss'>
            <img src={product.img} />
            </div>
            <button>Buy Now</button>
             <div className='Sevnth_page_3_img'>
              
              <h3>{product.name}</h3>
               
             </div>

             <div className='Sevnth_page_3_text'>
              <h4>{product.prize}</h4>
              <img src={product.Star} />
             </div>


          </div>

          
          

          




          </div>
        )
      })
    }
       


      
       </div>

       
      <div className='Sevnth_page_button'>
        <button>View All Products</button>
      </div>

      
       </>
    
  )

}

export default Sevnth_page;









