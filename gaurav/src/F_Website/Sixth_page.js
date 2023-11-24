import React from "react";

import Time1 from '../Picture/Flash Sell Timer1.png'
import Time2 from '../Picture/Flash Sell Timer2.png'
import Time3 from '../Picture/Flash Sell Timer3.png'
import Time4 from '../Picture/Flash Sell Timer4.png'

import Speaker from '../Picture/Speaker2.png'

function Sixth_page(){
    return(
        <>
        <div className="Sixth_page">
        <div className="Sixth_page_1">
            <h3>Categories</h3>
          <h1>Enhance Your <br/>Music Experience</h1>
          <div className="Sixth_page_2">
            <img src={Time1}/>
            <img src={Time2}/>
            <img src={Time3}/>
            <img src={Time4}/>
          </div>
          <button>Buy Now!</button>
       </div>

       <div className="Speaker">
    <img src={Speaker}/>
       </div>
        </div>
        </>
    )
}
export default Sixth_page;











