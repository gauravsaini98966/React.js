import React from 'react'
import bag from './images/handbag.png';
import speaker from './images/speaker.png';
import ps4 from './images/ps4remote.png';
import jacket from './images/jacket.png';
import laptop from './images/laptop.png';
import monitor from './images/monitor.png';
import remote from './images/gameremote.png';
import keyboard from './images/keyboard.png';

function Wishlist() {
    return (
        <div className='containerr'>
            <div className='content_box'>

                {/* top line */}
                <div className='headerr'>
                    <div className='text'>
                        <p>Wishlist (4)</p>
                    </div>
                    <div className='btn'>
                        <button>Move All To Bag</button>
                    </div>
                </div>

                {/* section1 */}
                <div className='row'>
                    <div className='col-md-3'>
                        <div className='img-box-1'>
                            <img src={bag} alt='not found'></img>
                        </div>
                        <div className='addcart'>
                            <button className='icon-cart'><span id='cart'><box-icon name='cart-alt' color='#fefefe' ></box-icon></span>Add To Cart</button>
                        </div>
                        <div className='price'>
                            <h6>Gucci duffle bag</h6>
                            <span id='clr'>$960</span>
                            <s>$1160</s>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className='img-box-2'>
                            <img src={speaker} alt='not found'></img>
                        </div>
                        <div className='addcart'>
                            <button className='icon-cart'><span id='cart'><box-icon name='cart-alt' color='#fefefe' ></box-icon></span>Add To Cart</button>
                        </div>
                        <div className='price'>
                            <h6>RGB liquid CPU Cooler</h6>
                            <span id='clr'>$1960</span>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className='img-box-3'>
                            <img src={ps4} alt='not found'></img>
                        </div>
                        <div className='addcart'>
                            <button className='icon-cart'><span id='cart'><box-icon name='cart-alt' color='#fefefe' ></box-icon></span>Add To Cart</button>
                        </div>
                        <div className='price'>
                            <h6>GP11 Shooter USB Gamepad</h6>
                            <span id='clr'>$550</span>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className='img-box-4'>
                            <img src={jacket} alt='not found'></img>
                        </div>
                        <div className='addcart'>
                            <button className='icon-cart'><span id='cart'><box-icon name='cart-alt' color='#fefefe' ></box-icon></span>Add To Cart</button>
                        </div>
                        <div className='price'>
                            <h6>Quilted Satin Jacket</h6>
                            <span id='clr'>$750</span>
                        </div>
                    </div>
                </div>

                {/* mid part */}
                <div className='mid-part'>
                    <div className='text'>
                        <h5>Just For You</h5>
                    </div>
                    <div className='btn-2'>
                        <button>See All</button>
                    </div>
                </div>

                {/* section 2 */}
                <div className='row'>
                    <div className='col-md-3'>
                        <div className='img-box-1'>
                            <img src={laptop} alt='not found'></img>
                        </div>
                        <div className='addcart'>
                            <button className='icon-cart'><span id='cart'><box-icon name='cart-alt' color='#fefefe' ></box-icon></span>Add To Cart</button>
                        </div>
                        <div className='price'>
                            <h6>ASUS FHD Gaming Laptop</h6>
                            <span id='clr'>$960</span>
                            <s>$1160</s>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className='img-box-2'>
                            <img src={monitor} alt='not found'></img>
                        </div>
                        <div className='addcart'>
                            <button className='icon-cart'><span id='cart'><box-icon name='cart-alt' color='#fefefe' ></box-icon></span>Add To Cart</button>
                        </div>
                        <div className='price'>
                            <h6>IPS LCD Gaming Monitor</h6>
                            <span id='clr'>$1160</span>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className='img-box-3'>
                            <img src={remote} alt='not found'></img>
                        </div>
                        <div className='addcart'>
                            <button className='icon-cart'><span id='cart'><box-icon name='cart-alt' color='#fefefe' ></box-icon></span>Add To Cart</button>
                        </div>
                        <div className='price'>
                            <h6>HAVIT HV-G92 Gamepad</h6>
                            <span id='clr'>$560</span>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className='img-box-4'>
                            <img src={keyboard} alt='not found'></img>
                        </div>
                        <div className='addcart'>
                            <button className='icon-cart'><span id='cart'><box-icon name='cart-alt' color='#fefefe' ></box-icon></span>Add To Cart</button>
                        </div>
                        <div className='price'>
                            <h6>AK-900 Wired Keyboard</h6>
                            <span id='clr'>$200</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Wishlist