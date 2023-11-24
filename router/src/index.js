import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './Layout';
import Home from './Component/Home';
import About from '../src/Component/About'
import Contact from './Component/Contact';

 
// const router=createBrowserRouter([
  // {
    // path:'/',
    // element:<Layout/>,
    // children:[
    //  {
      //  path:"",
    // element:<Home/>  
    //  },
    //  {
      // path:"about",
      // element:<About/>
    //  },
    //  {
      // path:"Contact",
  //  element:<Contact/>  
    // },
    //  
    // ]
  // }
// ])


const router =createBrowserRouter(
  createRoutesFromElements(
 
    <Route path='/' element={<Layout/>}>
    <Route path='' element={<Home/>}/>
    <Route path='about' element={<About/>}/>
    <Route path='Contact' element={<Contact/>}/>

    </Route>
  
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

reportWebVitals();
