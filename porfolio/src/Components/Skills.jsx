import React from 'react'
import {Skils} from '../Data/Skill'


function Skills() {
  return (
    <div className='Skills'>

        <div className='Skill_left'>
        <div className='Skill_left_top'>
            <h1>Technical Skills</h1>

            </div>

            <div className='Skill_left_bottom'>{
                Skils.map((product,index)=>{

                    return(
                  
                        <div key={index} className='Skill_left_bottom_1'>
                      <img className='w-[25px] h-[25px] rounded-full' src={product.img}/>
                      <div className='Skill_left_bottom_name flex gap-[30%]'>
                      <h1>{product.name}</h1>
                      <span>{product.span}</span>
                      </div>
                      
                      <div>
                      <span className='Skill_left_bottom_span'></span>
                      </div>
                     

                        </div>
                        
                    )

                })

            }
               

            </div>
    

        </div>




        <div className='Skill_right'>
          <div className='Skill_right_top'>
          <h1>Professional Skills</h1>
          </div>

          <div className='Skill_right_bottom'>

          </div>

        </div>

    </div>
  )
}

export default Skills;