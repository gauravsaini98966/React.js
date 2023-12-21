// import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Tools from './Components/Tool';
import Fother from './Components/Fother';
import Skill from './Components/Skills';

function App() {
  return (
    <>
    <div className=''>
<Navbar/>
   <Home/>
<About/>
<Tools/>
<Skill/>
<Fother/>
    </div>
    
       {/* <Home/> */}
    </>
 
  );
}

export default App;
