import React from 'react'
import { useState } from 'react';


export const Form = () => {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
      setInputs(values => ({...values, [event.target.name]: event.target.value}))
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(inputs);
    }
  return (
    <form onSubmit={handleSubmit}>
    <label>Enter your name:
    <input 
      type="text" 
      name="username" 
      value={inputs.username || ""} 
      onChange={handleChange}
    />
    </label>
    <label>Enter your age:
      <input 
        type="number" 
        name="age" 
        value={inputs.age || ""} 
        onChange={handleChange}
      />
      </label>
      <input type="submit" />
  </form>
  )
}
