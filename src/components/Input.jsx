import React,{useState} from 'react'
import Process from './Process';

const Input = () => {
    const [input1, setinput1] = useState(' ');
    const [input2, setinput2] = useState(' ');

    return (
        <div>
            <h1>Basic Calculator</h1>
            <div className='container'>
                <label>
                    First number
                </label>
                <input
                    type="number"
                    placeholder='Please enter number'
                    onChange={(event) => { setinput1(event.target.value) }}

                />

            </div>
            <div className='container'>
                <label>
                    Second number
                </label>
                <input
                    type="number"
                    placeholder='Please enter number'
                    onChange={(event) => {
                        setinput2(event.target.value)
                    }}

                />
            </div>
            <Process input1={input1} input2={input2}/>
        </div>
    )
}

export default Input
