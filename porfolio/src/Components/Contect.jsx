import React from 'react'
import {Media} from '../Data/Contact_Data'
import { NavLink } from 'react-router-dom'




function Contect() {
  return (
    <>
    <div className='py-10 px-40'>
        <h1 className='text-4xl font-medium text-center'>Contact <span style={{color:'#2253c8'}}>Me</span></h1>


        <div className='Contact flex justify-between py-10 flex-wrap '>

            <div className='Contact_left'>
                 <h2 className='text-2xl  font-bold'>Get in touch</h2>

                      <div className='Contact_left_bottom'> {
                      Media.map((product,index)=>{
                        return(
                          <div className='Contact_left_bottom1 flex gap-5' key={index}>
                            <img src={product.img}/>
                            <a>{product.link}</a>
                          </div>
                        )

                      })
                        }
                      </div>
            </div>

             <div className='Contact_right'>
                   <h2 className='text-2xl font-bold'>Message me</h2>
                   <div className='Contact_right_bottom'>
                    <div className='input1 flex'>
                    <input className='' type='text' placeholder='Name'/>
                    <input type="text" placeholder='Email' />


                    </div>
                    <div className='input2 block'>
                        <input type='text' placeholder='Subject'/>
                      <textarea type='text' placeholder='Message...'></textarea>

                    </div>
                    <button className=''> Send message </button>
                    

                   </div>
             </div>
        </div>
    </div>
    </>
  )
}

export default Contect