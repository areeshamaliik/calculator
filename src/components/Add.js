import React from 'react'
import '../App.css'

function Add(props){

  const Add=(event)=>
  {
    event.preventDefault();
    props.settotal(Number(props.input1)+Number(props.input2));
  }
  return (
    
    <div className='btns-stack'>
      <button onClick={Add} >+</button>
    </div>
  )
}

export default Add
