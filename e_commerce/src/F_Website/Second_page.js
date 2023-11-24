import React from 'react'
import Image from '../Picture/Rectangle.png'
import Semiclone from '../Picture/Semiclone.png';
import right_icon from '../Picture/Right Arrow.png';
import left_icon from '../Picture/Left Arrow.png';
import Second_css from '../MYcss/Style.css'
import Ellipse from '../Picture/Ellipse.png'

import Frame1 from '../Picture/Frame1.png';
import Frame2 from '../Picture/Frame2.png';
import Frame3 from '../Picture/Frame3.png';
import Frame4 from '../Picture/Frame4.png';
import Frame_star from '../Picture/Frame star1.png'
import Frame_star2 from '../Picture/Frame star2.png'
import Frame_star3 from '../Picture/Frame star3.png'
import Frame_star4 from '../Picture/Frame star4.png'

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

          <div className='Third_page_3'>


          <img className='Third_page_3_img1' src={left_icon}/>
        
         <img className='Third_page_3_img3' src={right_icon}/>
       
            
          </div>



        </div>



 


 <div className='Third_page_row3'>
<div className='Third_page_row3_img_text'>
  <img src={Frame1} />
<h1>HAVIT HV-G92 Gamepad</h1>
<h2>$120 <span>$160</span></h2>
<img className='frame_star' src={Frame_star} />
</div>


<div className='Third_page_row3_img_text'>
  <img src={Frame2} />
<h1>AK-900 Wired Keyboard</h1>
<h2>$960 <span>$1160</span></h2>
<img src={Frame_star2} />
</div>




<div className='Third_page_row3_img_text'>
  <img src={Frame3} />
<h1>IPS LCD Gaming Monitor</h1>
<h2>$370 <span>$400</span></h2>
<img src={Frame_star3} />
</div>



<div className='Third_page_row3_img_text'>
  <img src={Frame4} />
<h1>HAVIT HV-G92 Gamepad</h1>
<h2>$370 <span>$400</span></h2>
<img src={Frame_star4} />
</div>

 </div>


<div className='Third_page_row4'>

<button>View All Products</button>
</div>


      </div>
    </>
  )
}

export default Second_page;