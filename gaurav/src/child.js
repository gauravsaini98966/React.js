import React, {useContext} from 'react'

import {data,data1} from './App';
function child() {
    const name=useContext(data);
    const age=useContext(data1);


  return (
    <div>
my name is{name} age is{age}
    </div>
  )
}

export default child