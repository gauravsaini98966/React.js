import React from 'react';
import '../MYcss/Style.css';
import { Link } from 'react-router-dom'
import Image1 from '../Picture/Component 2.png'
import Image2 from '../Picture/Cart1.png'
import Image3 from '../Picture/Vector.png'

function Navbar() {
  return (
    <div className='Navbar'>

       <div className='Navbar_logo'>
            <h2>Exclusive</h2>
       </div>

       <div className='Navmenu'>
         <ul>
            <li><a  href='#' >Home</a></li>
            <li><a href='#' >Contant</a></li>
            <li><a href='#' >About</a></li>
            <li><a href='#' >Sign Up</a></li>
         </ul>
       </div>

       <div className='Navbar_Search'>
         <div className='Navbar_Search_1'>
               <input type='text' placeholder='What are you looking for?'/>
               <img src={Image1} alt='Image1' />


               </div>

               <div className='Navbar_Search_2'>
                <img src={Image3} alt=''/>
                <img src={Image2} alt=''/>
               </div>
               
       </div>
    </div>
  )
}

export default Navbar
