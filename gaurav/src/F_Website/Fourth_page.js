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




