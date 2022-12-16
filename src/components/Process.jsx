import React, { useState } from 'react'
import Output from './Output';

const Process = ({ input1, input2 }) => {

    console.log(input1,input2)
    const [total,setTotal] = useState('');

    const Add = () => {
        setTotal(parseInt(input1) + parseInt(input2));
        console.log(total)
    }

    const Subtract = () => {
        setTotal(input1 - input2);
        console.log(total)

    }

    const Multiply = () => {
        setTotal(input1 * input2);
        console.log(total)

    }

    const Divide = () => {
        setTotal(input1 / input2);
        console.log(total)

    }
    
    return (
        <div>
            <div style={{display:'flex', justifyContent:'center', gap: '30px'}}>
                <div className='btns-stack'>
                    <button onClick={Add} >+</button>
                </div>
                <div className='btns-stack'>
                    <button onClick={Subtract} >-</button>
                </div>
                <div className='btns-stack'>
                    <button onClick={Multiply} >X</button>
                </div>
                <div className='btns-stack'>
                    <button onClick={Divide} >/</button>
                </div>
            </div>
            <Output total={total}/>
        </div>
    )
}

export default Process
