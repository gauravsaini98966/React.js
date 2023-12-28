import logo from './logo.svg';
import './App.css';
import { useDispatch } from 'react-redux';
import Counter from './Components/Counter';

function App() {
  const dispatch= useDispatch();
  return (
   <>
   <button>Increment</button>
   <Counter/>
   <button>Decrement</button>
   </>
  );
}

export default App;
