import React from 'react'

function Contect() {
  return (
    <>
    <div>
        <h1>Contact <span>Me</span></h1>


        <div className='Contact'>

            <div className='Contact_left'>
                 <h2>Get in touch</h2>

                      <div className='Contact_left_bottom'>
                        {

                        }
                      </div>
            </div>

             <div className='Contact_right'>
                   <h2>Message me</h2>
                   <div className='Contact_right_bottom'>
                    <div className='input1'>
                    <input type='text' placeholder='Name'/>
                    <input type="text" placeholder='Email' />


                    </div>
                    <div className='input2'>
                        <input type='text' placeholder='Subject'/>
                        <input type="text" placeholder='Message'/>

                    </div>
                    <button>Message me</button>
                    

                   </div>
             </div>
        </div>
    </div>
    </>
  )
}

export default Contect