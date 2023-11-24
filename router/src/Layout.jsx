import React from 'react' 

import Header from '../src/Component/Header'
import Footer from '../src/Component/Footer'
import { Outlet } from 'react-router-dom'


function Layout() {
  return (
<>
<Header/>
<Outlet/>
<Footer/>
</>
  
  
  )
}

export default Layout