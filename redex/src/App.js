import logo from './logo.svg';
import './App.css';
import {Provider} from 'react';
import { store } from './reduxcontainer/Store';
import Product from './Components/Product';
import Products from './Products.json'
import Cart from './Components/Cart';

function App() {
  return (
    <div className='App'>
      <Cart/>
      <div className='products'>
        {Product.map((Product)=>(
          <Product {...Product}/>
        ))}

      </div>

    </div>
  );
}

export default App;
