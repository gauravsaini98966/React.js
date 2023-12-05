import React from 'react'
import Image from '../Picture/Rectangle.png'
import Semiclone from '../Picture/Semiclone.png';
import right_icon from '../Picture/Right Arrow.png';
import left_icon from '../Picture/Left Arrow.png';
import Second_css from '../MYcss/Style.css'
import Ellipse from '../Picture/Ellipse.png'

import  {Flash} from '../Short_Components/Second';

function Second_page() {
  return (
    <>
      <div className='Third_page'>

        <div className='Third_page_1'>
          <img src={Image} alt='' />
          <h4>Today's</h4>

        </div>

        <div className='Third_page_2'>
          <div className='Third_page_h1' >
            <h1>Flash Sales</h1>
          </div>
          <div className='Times'>
            <div className='time'>
              <h4>Days</h4>
              <h1>03</h1>
            </div>

            <img src={Semiclone} />

            <div className='time'>
              <h4>Hours</h4>
              <h1>23</h1>

            </div>
            <img src={Semiclone} />

            <div className='time'>
              <h4>Minutes</h4>
              <h1>19</h1>
            </div>

            <img src={Semiclone} />

            <div className='time'>
              <h4>Seconds</h4>
              <h1>56</h1>

            </div>


          </div>

          <div className='fifth_page_button' >    
      <button>View All</button>
        </div>



        </div>



        <div className='Third_page_row'>{
        Flash.map((product,index)=>{
          return (
            <div key={index} className='Third_page_row3'>


            <div className='Third_page_row3_img_text'>
              <div className='Third_page_row3_img'>
              <img src={product.img} />
              </div>
              <button>{product.button}</button> 
           
            <h1>{product.name}</h1>
            <h2>{product.prize} <span>{product.prize2}</span></h2>
            <img className='frame_star' src={product.img2} />
            </div>
            
            
             </div>
            
          )
        })

        }

        </div>

 




<div className='Third_page_row4'>

<button>View All Products</button>
</div>


      </div>
    </>
  )
}

export default Second_page;