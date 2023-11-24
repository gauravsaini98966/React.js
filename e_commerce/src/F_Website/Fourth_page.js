import React from 'react'
import {ProductData} from '../Short_Components/First_Comp';
import Rectangle from '../Picture/Rectangle.png'; 
import Phones from '../Picture/Phones.png';
import Computer from '../Picture/Computer.png'
import SmartWatch from '../Picture/SmartWatch.png'
import Camera from '../Picture/Camera.png';
import HeadPhones from'../Picture/HeadPhones.png';
import Gaming from '../Picture/Gaming.png';
import left_Arrow from '../Picture/Left Arrow.png';
import Right_Arrow from '../Picture/Right Arrow.png'

const Fourth_page=()=>{
    console.log(ProductData)
  return (
    <>
    <div className='Fourth_page'>{
         ProductData.map((product,index)=>{

            return(

                <div className='Fourth_page_all'>
                <div key={index} className='Fourth_page_1'>
                   <img src={Rectangle} alt='img not found'/>
                   <h4>{product.name}</h4>
                </div>

                <div className='fourth_page_2'>
                  <h1>{product.name2}</h1>
                  <div key={index} className='Fourth_pagee_2_img'>
                          <img src={left_Arrow}/>
                          <img src={ Right_Arrow}/>
                  </div>


                </div>

                </div>
            )

           
         })
         
    }
       <div className='Fourth_page_3'>
        <img src={Phones} />          
        <img src={Computer} />          
        <img src={SmartWatch} />          
        <img src={Camera} />
        <img src={HeadPhones} />          
        <img src={Gaming} />          
         </div>
               
    </div>
    </>
  )
}

export default Fourth_page;






<>

   
<div className='Third_page'>

<div className='Third_page_1'>
<img src={ Rectangle } alt='' />
<h4>Today's</h4>

</div>

<div className='Third_page_2'>
<div className='Third_page_h1' >
 <h1>Flash Sales</h1>
</div>

 

</div>




</div>






<div className='Third_page_row3'>


<div className='Third_page_row3_img_text'>
<img src={Cloth} />
<h1>HAVIT HV-G92 Gamepad</h1>
<h2>$120 <span>$160</span></h2>
<img className='frame_star' src={Frame_star6} />
</div>


<div className='Third_page_row3_img_text'>
<img src={Bag} />
<h1>AK-900 Wired Keyboard</h1>
<h2>$960 <span>$1160</span></h2>
<img src={Frame_star5} />
</div>




<div className='Third_page_row3_img_text'>
<img src={Speaker} />
<h1>IPS LCD Gaming Monitor</h1>
<h2>$370 <span>$400</span></h2>
<img src={Frame_star5} />
</div>



<div className='Third_page_row3_img_text'>
<img src={Table} />
<h1>HAVIT HV-G92 Gamepad</h1>
<h2>$370 <span>$400</span></h2>
<img src={Frame_star6} />
</div>

</div>





 </>