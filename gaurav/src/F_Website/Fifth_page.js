import React from 'react'
import Reactangle from '../Picture/Rectangle.png'

function Fifth_page() {
  return (
    <div className='Fifth_page'>
       <div className='Sevnth_page_1'>
        <img src={Reactangle}/>
        <h3>This Month</h3>
      </div>
      <div className='Sevnth_page_2'>
      <h1>Best Selling Products </h1>

        <div className='fifth_page_button' >    
      <button>View All</button>
        </div>
     
      </div>
     
    </div>
  )
}

export default Fifth_page