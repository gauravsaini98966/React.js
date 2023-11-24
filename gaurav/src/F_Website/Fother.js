import React from 'react'
import Qrcode from '../Picture/Qrcode.png';
import Google_play from '../Picture/Google-Play.png';
import Apple_play from '../Picture/Apple-appstore.png'

import facebook from '../Picture/Facebook.png'
import Twitter from '../Picture/Twitter.png'
import instagram from '../Picture/instagram.png'
import Linkedin from '../Picture/Linkedin.png'
import Send from '../Picture/icon-send.png'

function Fother() {
  return (
    <>
    <div className='Fother'>

        <div className='Fother_1 Fother_all'>
        <h2>Exclusive</h2>
        <h3 className='Fother_h3'>Subscribe</h3>
        <h3>Get 10% off your first order</h3>
        <div className='Fother_input'>
          <div className='Fother_1_input'>
        <input type='text' placeholder='Enter your email'/>
        <img src={Send}/>
        </div>
        </div>

        </div>

        <div className='Fother_2 Fother_all'>
        <h2>Support</h2>
        <h3>111 Bijoy sarani, Dhaka,<br/>DH 1515, Bangladesh.</h3>
        <h3>exclusive@gmail.com</h3>
        <h3>+88015-88888-9999</h3>
        </div>

        <div className='Fother_3 Fother_all'>
        <h2>Account</h2>
        <h3>My Account</h3>
        <h3>Login/Register</h3>
        <h3>Cart</h3>
        <h3>Wishlist</h3>
        <h3>Shop</h3>
        </div>


        <div className='Fother_4 Fother_all'>
        <h2>Quick Link</h2>
        <h3>Privacy Policy</h3>
        <h3>Terms Of Use</h3>
        <h3>FAQ</h3>
        <h3>Contact</h3>
        </div>
        
          <div className='Fother_5 Fother_all'>
              <h2>Download App</h2>
              <p>Save $3 with App New User Only</p>

              <div className='Qr_stores'>
                <div className='Qr'>
                 <img src={Qrcode}/>
                 </div>
                 <div className='stores'>
                 <img src={Google_play} /><br/>
                 <img src={Apple_play} />
                 </div>


              </div>

              <div className='Social_Media'>
                <img src={facebook}/>
                <img src={Twitter}/>
                <img src={instagram}/>
                <img src={Linkedin}/>
              </div>

          </div>
       
    </div>

    
    </>
    
  )
}

export default Fother;