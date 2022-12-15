
import {React,useState} from 'react';
import './App.css';


const App=(event)=>
{
  const [input1, setinput1] = useState(' ');

  const [input2, setinput2] = useState(' ');

  const [ total, settotal]=useState('');

  const Add=(event)=>
  {
    event.preventDefault();
    settotal(Number(input1)+Number(input2));
  }
  const Subtract=(event)=>
  {
    event.preventDefault();
    settotal(Number(input1)-Number(input2));
  }
  const Multiply=(event)=>
  {
    event.preventDefault();
    settotal(Number(input1)*Number(input2));
  }

   return (
      <div className="forms">
      <form >
      <h1>Basic Calculator</h1>
      <div className='container'>
      
      <label>
        First number
      </label>
        <input
        type="number"
        placeholder='Please enter number'
        onChange={(event)=>
        {
          setinput1(event.target.value)
        }}
 
        />

      </div>
      <div className='container'>
      <label>
        Second number
        </label>
        <input
        type="number"
        placeholder='Please enter number'
        onChange={(event)=>
        {
          setinput2(event.target.value)
        }}
      
        />
      </div>
      <div className='container'>
      <label>
        Result
          </label>
          <input
          type="number"
          placeholder='Please enter number'
          value={total}
          />
      </div>
      <div className='btns-stack'>
      <button onClick={Add} >+</button>
      <button onClick={Subtract} >-</button>
      <button onClick={Multiply} >X</button>
      </div>
         </form>
         </div> 
    );
  };
export default App;
