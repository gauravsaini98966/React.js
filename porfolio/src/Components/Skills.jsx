import React from 'react'
import {Skils} from '../Data/Skill';
import {Creative_skill} from '../Data/Skill'




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
                      <img className='w-[25px] h-[25px] rounded-full' src= {product.img}/>
                      <div className='Skill_left_bottom_name flex justify-between '>
                      <h1>{product.name}</h1>
                      <span className=''>{product.span}</span>
                      </div>
                      
                      <div className=' rounded w-96 h-2  bg-black'>
                      <div  className='skill_level w-80 h-2 '>
                  
                      </div>
                      </div>
                     

                        </div>
                        
                    )

                })

            }
               

            </div>
    

        </div>




        <div className='Skill_right'>
          <div className='Skill_right_top'>
          <h1>Soft and Creative Skills</h1>
          </div>

          <div className='Skill_right_bottom'>{
             Creative_skill.map((product,index)=>{
              return(
                <div key={index}>
                  <ul>
                    <li>{product.text}</li>
                  </ul>

                </div>
              )
             })

          }

          </div>

        </div>

    </div>
  )
}

export default Skills;