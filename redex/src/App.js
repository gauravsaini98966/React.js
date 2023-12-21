import logo from './logo.svg';
import './App.css';
import {Provider} from 'react';
import { store } from './reduxcontainer/Store';

function App() {
  return (
 <Provider store={store}>
  

 </Provider>
  );
}

export default App;
