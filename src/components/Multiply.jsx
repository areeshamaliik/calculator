import React from 'react'
function Multiply(props)
 {
  const Multiply=(event)=>
  {
    event.preventDefault();
    props.settotal(Number(props.input1)*Number(props.input2));
  }

  return (
    <div className='btns-stack'>
    <button onClick={Multiply} >X</button>
      
    </div>
  )
}

export default Multiply
