import React from 'react'
import {ProductData} from '../Short_Components/Fouthpage1';
import Rectangle from '../Picture/Rectangle.png'; 

import left_Arrow from '../Picture/Left Arrow.png';
import Right_Arrow from '../Picture/Right Arrow.png'
import { Electronic } from '../Short_Components/Fourthpage2';


const Fourth_page=()=>{
    
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
                          <button>View All</button>
                  </div>


                </div>

                </div>
            )

           
         })
         
    }
       <div className='Fourth_page_3'>{
         Electronic.map((product,index)=>{
          return(
           <div key={index}>
             <img src={product.img}/>
           </div>
        
            )
         })
        
       }         
         </div>
               
    </div>
    </>
  )
}

export default Fourth_page;




