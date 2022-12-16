import { React, useState } from 'react';
import './App.css';
import Input from './components/Input';


const App = () => {


  const [total, settotal] = useState('');
  return (
    <div className="forms">
      <div className='form'>
        <Input />
      </div>
    </div>
  );
};
export default App;
