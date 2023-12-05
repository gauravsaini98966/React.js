import React from 'react'
import Reactangle from '../Picture/Rectangle.png'


import Big1 from '../Picture/Big1.png';
import Big2 from '../Picture/big2.png';
import Big3 from '../Picture/big3.png';
import Big4 from '../Picture/Big4.png';

function Eight_page() {
  return (
    <>
    <div className='Eight_page_1'>

    <div className='Sevnth_page'>
      <div className='Sevnth_page_1'>
        <img src={Reactangle}/>
        <h3>Featured</h3>
      </div>
      <div className='Sevnth_page_2'>
      <h1>New Arrival </h1>
      </div>

    </div>


    <div className='Eight_page_2'>
        <div className='Eight_page_left'>
         <img src={Big1}/>
        </div>

        <div className='Eight_page_right'>
         <div className='Eight_page_right_top'>
        <img src={Big2} />
         </div>

         <div className='Eight_page_right_bottom'>
        <img src={Big3} />
        <img src={Big4} />
         </div>
        
        </div>


    </div>
    </div>
    </>
  )
}

export default Eight_page;