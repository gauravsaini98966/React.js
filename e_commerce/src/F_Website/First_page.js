import React from 'react'
import Image from '../Picture/right_icon.png'
import Image2 from '../Picture/Frame.jpg'
import '../MYcss/Style.css'


function First_page() {
  return (
    <>
    <div className='First_page'>
        {/* <div className='First_page_left'>

            <div className='first_page_contained'>
                <h3>Woman’s Fashion</h3> 
                <img src={Image} />
                </div>
                
                <div className='first_page_contained first_page_contained_2 '>
                <h3>Man’s Fashion</h3> 
                <img src={Image} />
                </div>
              <h3>Electronics</h3>
              <h3>Home & Lifestyle</h3>
              <h3>Medicine</h3>
              <h3>Sports & Outdoor</h3>
              <h3>Baby’s & Toys</h3>
              <h3>Groceries & Pets</h3>
              <h3>Health & Beauty</h3>
        </div> */}



        <div className='First_page_Right'> 
              <img style={{marginLeft: "auto", marginRight:"auto"}} src={Image2} />
        </div>

    </div>
    </>
  )
}

export default First_page
