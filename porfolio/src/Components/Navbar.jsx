import React from 'react'
import {NavLink,Link}from 'react-router-dom'
import { useContext } from 'react'
import Menu from'../Img/menu.png'
import '../MYcss/Style.css';
import '../MYcss/Responsive.css';
import { useState } from 'react';
// import MyContext from 'path-to-your-context';

function Navbar() {
  // const myContextValue = useContext(MyContext);
  const[toggle,setToggle]=useState(false);

  function click(){
    setToggle(!toggle);
  }
  return (
  
    <>
    <header className='Navheader'>
    <div className='Navbar'>
        <div className='logo'>
         <span>Portfo</span>
         <span>lio</span>
        </div>

        <div className='Navbar_menu'>
           <ul>
             <li><a href='#' className='Navbar_menu_link'>Home</a></li>
            <li><a href='#' className='Navbar_menu_link'>About</a></li>
            <li><a href='#' className='Navbar_menu_link'>Projects</a></li>
            <li><a href='#' className='Navbar_menu_link'>Skills</a></li>
            <li><a href='#' className='Navbar_menu_link'>Tools</a></li>
            <li><a href='#' className='Navbar_menu_link'>Contact</a></li> 

          
           </ul>
     
        </div>
        <div id='mobile'>
           <div className='mobile_button'>
            <button  onClick={click}><img src={Menu}/></button>
          
           <ul className={`toggle ${toggle ? "toggle":""}`}>
             <li><a href='#' className='Navbar_menu_link'>Home</a></li>
            <li><a href='#' className='Navbar_menu_link'>About</a></li>
            <li><a href='#' className='Navbar_menu_link'>Projects</a></li>
            <li><a href='#' className='Navbar_menu_link'>Skills</a></li>
            <li><a href='#' className='Navbar_menu_link'>Tools</a></li>
            <li><a href='#' className='Navbar_menu_link'>Contact</a></li> 

          
           </ul>
           </div>
        </div>

    </div>
    </header>
    </>
  )
}

export default Navbar;