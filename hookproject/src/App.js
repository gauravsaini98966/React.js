import logo from './logo.svg';
import './App.css';
// import UseEffactApi from './Components/UseEffactApi';
import Count from './Components/Count';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch =useDispatch();
  return (
    <div>
      <button onClick={e=>dispatch({type:'INCREMENT'})}>Increment</button>
      <Count/>
      <button onClick={e=>dispatch({type:'DECREMENT'})}>Decrement</button>
    </div>
  );
}

export default App;
