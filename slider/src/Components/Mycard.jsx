import React from 'react'
import Image from './Image'
// import '../Components/mycard.css'
import '../mycss/mycard.css'
const Mycard=(props)=>{
  return (
    <div className='mycard'>Mycard{props.cardno}</div>
  )
}

export default Mycard;