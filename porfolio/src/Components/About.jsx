import React from 'react'
import Typical from "react-typical";
import { Data } from '../Data/Home_Data'
import '../MYcss/Style.css'
function About() {
  return (
    <div data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="2000"  className='About flex '>
        <div className='About_img'>{
              Data.map((product,index)=>{
                return(
                  <div key={index} className='About_img' >
            <img  className='' src={product.img} alt=""/>
            </div>
                )
            
              })
        }

        </div>

        <div className='About_detait px-[40px] py-12'>
            <h1 className='text-4xl font-semibold'>About <span>Me</span> </h1>
            <div className='About_span py-4'>
            <span className='text-3xl font-medium'>I'm Gaurav and I'm a </span>

            <span className='about_me text-3xl font-mediam my-2  '>
  
     <span >
     <Typical
              steps={[
                 " Web Developer",
                1000,
                "",
                10,

              ]}
              loop={Infinity}
              wrapper="about_me"
            />

     </span>
</span>
</div>


<p className='py-4'>
Passionate Full Stack Web Developer with a specialization in MERN  stack.<br/>Skilled, collaborative and attentive developer with a drive to develop the <br/>most relevant products. Always looking forward to learning something new to strengthen skills learned.
</p>

<div className='About_btn'>
    <button>Preview CV</button>
    <button>Download CV</button>
</div>
        </div>
    </div>
  )
}

export default About