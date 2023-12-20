import React from 'react'
import { Data } from '../Data/Home_Data'
// import '../MYcss/Style';
// import  Typical from 'react-typical';
import Typical from "react-typical";


function Home() {
  return (
    <>
    <div className='Hero relative bg-black flex justify-between items-center top-[108px] text-white px-10 py-20'>
<div className='home px-10 '>
<h3 className='text-4xl font-mediun py-2' >Hi,It's Me</h3>
<div className='Name text-7xl py-1'>Gaurav</div> 
<div className='   py-2'>
<span  className='text-3xl font-mediam'>And I'm a </span>

<span className='text_animation text-3xl font-mediam'>
  
     <span >
     <Typical
              steps={[
                 " Web Developer",
                1000,
                "",
                10,

              ]}
              loop={Infinity}
              wrapper="span"
            />

     </span>
</span>
</div>
<p className='Home_paragraph '>
As a Web developer, I design and implement web
applications,<br></br> working with front-end technologies like
HTML, CSS, JavaScript,React.js,Mongo db and Node.js.

</p>
<div className='btn'>
<button  className='text-3xl  '>Hire me</button>
</div>
</div>

<div className='Hero_img'>{
  Data.map((product,index)=>{
    return(
      <div key={index} className='Porfolio_img' >
<img  className='' src={product.img} alt="" />
</div>
    )

  })
  

}


</div>

    </div>
    </>
  )
}

export default Home