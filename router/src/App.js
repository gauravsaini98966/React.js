import logo from './logo.svg';
import './App.css';
import Header from './Component/Header';
import Footer from './Component/Footer';
import Home from './Component/Home';
import { useState } from 'react';

function App() {
  const[count,setCount]=useState(0);
  return (
   <>
   <Header/>
   <Home/>
   <Footer/>
   </>
  );
}

export default App;
