import React from 'react'
import Child from './Child'

function parants({user}) {
  const {name,age}=user;
    return (

    <div>
        
                My name is {name} and my age is {age}
 <Child {...user}/>
        
    </div>
  )
}

export default parants