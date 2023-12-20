import React from 'react'
import {NavLink}from 'react-router-dom'
import Menu from '../Img/menu.png';

function Navbar() {
  return (
    <>
    <div className='Navbar'>
        <div className='logo'>
         <span>Portfo</span>
         <span>lio</span>
        </div>

        <div className='Navbar_menu'>
           <ul>
            <li><NavLink to='/' >Home</NavLink></li>
            <li><NavLink>About</NavLink></li>
            <li><NavLink>Projects</NavLink></li>
            <li><NavLink>Skills</NavLink></li>
            <li><NavLink>Tools</NavLink></li>
            <li><NavLink>Contact</NavLink></li>
           </ul>
     
        </div>
        <div id='mobile'>
           <div>
            <button><img ></img></button>
           </div>
        </div>

    </div>
    </>
  )
}

export default Navbar