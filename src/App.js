import {React,useState} from 'react';
import './App.css';
import Add from './components/Add'
import Subtract from './components/Subtract';
import Multiply from './components/Multiply';


const App=()=>
{
const [input1, setinput1] = useState(' ');

const [input2, setinput2] = useState(' ');

const [ total, settotal]=useState('');
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
onChange={(event)=>{ setinput1(event.target.value)}}

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
    // onChange={(event)=>
    // {
    //   settotal(event.target.value)
    // }}
    />
</div>    
<div className='btns-stack'>
<Add/>
<Subtract/>
<Multiply/>
</div>
</form>
</div> 
);
};
export default App;
