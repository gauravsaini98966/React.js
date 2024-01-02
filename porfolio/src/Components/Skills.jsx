import React from 'react'
import {Skils} from '../Data/Skill';
import {Creative_skill} from '../Data/Skill'




function Skills() {
  return (
    <>
    <h1 className=' skill_heading text-4xl text-center py-4 gap-10 '>My<span className=''> Skill</span></h1>
    <div className='Skills flex justify-between flex-wrap p-10'>

        <div data-aos="fade-up" className='Skill_left'>
        <div className='Skill_left_top text-3xl underline-offset-8 py-3 underline '>
            <h1 className=''>Technical Skills</h1>

            </div>

            <div className='Skill_left_bottom'>{
                Skils.map((product,index)=>{

                    return(
                  
                        <div key={index} className='Skill_left_bottom_1 py-2'>
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




        <div  className='Skill_right py-3 px-6'>
          <div className='Skill_right_top text-3xl underline '>
          <h1>Soft and Creative Skills</h1>
          </div>

          <div className='Skill_right_bottom py-6'>{
             Creative_skill.map((product,index)=>{
              return(
                <div data-aos="fade-down" key={index} className=''>
                  <ul className='leading-10 '>
                    <li className='list-disc'>{product.text}</li>
                  </ul>

                </div>
              )
             })

          }

          </div>

        </div>

    </div>
    </>
  )
}

export default Skills;