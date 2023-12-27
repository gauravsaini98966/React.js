import React from 'react'
// import InputBox from './Component/InputBox';
import {useEffect,useState} from 'react'
// import{usestate} from 'react'
// import InputBox from './Component/InputBox';

function App() {

  const [productData ,setProductData]=useState({});

  const getproductData=async()=>{
    await fetch('https://dummyjson.com/products/1')
    .then(res=>res.json())
    .then(json=>{setProductData(json.products);console.log(json)})
  }

  useEffect(()=>{
    getproductData();
    console.log("data=>",productData);

  },[])

  return (
  <>
  <h1>API Data</h1>{
  //  { console.log("data=>",productData)}
  }
  {productData.map((item,index)=>{
    return(
      <div key={index}>{item.title}</div>
    )
  })}
  </> 
      
  
  )
}

export default App;
