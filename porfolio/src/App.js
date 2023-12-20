// import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Tools from './Components/Tool';
import Fother from './Components/Fother';

function App() {
  return (
    <>
    <div className=''>
<Navbar/>
   <Home/>
<About/>
<Tools/>
<Fother/>
    </div>
    
       {/* <Home/> */}
    </>
 
  );
}

export default App;
