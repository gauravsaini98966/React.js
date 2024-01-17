// import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Tools from './Components/Tool';
import Fother from './Components/Fother';
import Skill from './Components/Skills';
import Contect from './Components/Contect';
import Projects from './Components/Projects';

function App() {
  return (
    <>
    <div className=''>
      
<Navbar/>
   <Home/>
<About/>
<Projects/>
<Skill/>
<Tools/>

<Contect/>
<Fother/>
    </div>
    
    </>
 
  );
}

export default App;
