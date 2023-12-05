import React from 'react';
import gamee from './/images/Gamepad-Cart-Small.png';
import monitorr from './/images/Monitor-Cart-Small.png';
import bcash from './/images/Bkash.png';
import visa from './/images/Visa.png';
import mastercard from './/images/Mastercard.png';
import nagad from './/images/Nagad.png';

function Checkout() {
    return (
        <>
            <div className='checkout'>

                <div className='checkout_head'>
                    <label><span>Account / My Account / Product / View Cart /</span> CheckOut</label>
                </div>

                <div className='Billing_detail'>
                    <h1>Billing Details</h1>
                </div>

                <div className='context__box_'>

                    {/* detail_section */}

                    <div className='details_section'>

                        <div className='detail'>
                            <label>First Name<span>*</span></label>
                            <input type='text' />
                        </div>

                        <div className='detail'>
                            <label>Company Name</label>
                            <input type='text' />
                        </div>

                        <div className='detail'>
                            <label>Street Address<span>*</span></label>
                            <input type='text' />
                        </div>

                        <div className='detail'>
                            <label>Apartment, floor, etc. (optional)</label>
                            <input type='text' />
                        </div>

                        <div className='detail'>
                            <label>Town/City<span>*</span></label>
                            <input type='text' />
                        </div>

                        <div className='detail'>
                            <label>Phone Number<span>*</span></label>
                            <input type='text' />
                        </div>

                        <div className='detail_email'>
                            <label>Email Address<span>*</span></label>
                            <input type='text' />
                        </div>
                        <div className='save_info'>
                            <div className='checkbox_button'>
                                <input type='checkbox' color='red' />
                            </div>
                            <div className='information'>
                                <h6>Save this information for faster check-out next time</h6>
                            </div>
                        </div>

                    </div>

                    {/* items section */}


                    <div className='items_list'>

                        <div className='products__'>

                            <div className='first_product'>
                                <img src={gamee} alt='not found'></img>
                                <label>LCD Monitor</label><span>$650</span>
                            </div>
                            <div className='second_project'>
                                <img src={monitorr} alt='not found'></img>
                                <label>H1 Gamepad</label><span>$1100</span>
                            </div>

                        </div>

                        {/* <div className='price_container'> */}

                        <div className='price_list'>

                            <div className='price_of_products'>
                                <div className='mrp_product'>
                                    <label>Subtotal:</label><span>$1750</span>
                                    <hr />
                                </div>
                                <div className='mrp_products_'>
                                    <label>Shipping:</label><span>Free</span>
                                    <hr />
                                </div>
                            </div>

                            <div className='total_price'>
                                <label>Total:</label><span>$1750</span>
                            </div>

                        </div>

                        {/* </div> */}

                        <div className='bank_cards'>
                            <div className='card_btn'>
                                <input type='radio' name='bill'/>
                                <label>Bank</label>
                            </div>
                            <div className='cards_img'>
                                <img src={bcash} alt='not found'></img>
                                <img src={visa} alt='not found'></img>
                                <img src={mastercard} alt='not found'></img>
                                <img src={nagad} alt='not found'></img>
                            </div>
                        </div>

                        <div className='cash_on_delivery'>
                            <div className='card_btn'>
                                <input type='radio' name='bill'/><label>Cash on delivery</label>
                            </div>
                        </div>

                        <div className='promo_code'>
                            <div className='input_text'>
                                <input type='text' />
                            </div>
                            <div className='promo_btn'>
                                <button>Apply Coupon</button>
                            </div>
                        </div>

                        <div className='place_order_btn'>
                            <button>Place Order</button>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default Checkout
