import React from 'react'

function Subtract(props)
{

  const Subtract=(event)=>
  {
    event.preventDefault();
    props.settotal(Number(props.input1)-Number(props.input2));
  }
  return (
    <div className='btns-stack'>
    <button onClick={Subtract} >-</button>
      
    </div>
  )
}

export default Subtract
