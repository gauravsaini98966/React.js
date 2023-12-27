import React, { useState } from 'react'

function Form() {
  const data={name:"",email:"",password:""}
  const[inputData,setInput]=useState(data)
  function handleData(e){
setInput({...inputData,[e.target.name]:e.target.value})
console.log(inputData)
  }
  return (
    <div>
    <form>
        <div>
          <input type='text' placeholder='name' value={inputData.name} onChange={handleData} >
        </input>
        </div>
        <div>
          <input type='text' placeholder='email' value={inputData.email}  onChange={handleData}>
        </input>
        </div>

        <div>
          <input type='text' placeholder='passward' value={inputData.password}  onChange={handleData}>
        </input>
        </div>
        <div>
          <button type='submit'>
           Submit 
          </button>
        </div>
    </form>
    </div>
  )
}

export default Form