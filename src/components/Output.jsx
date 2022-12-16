import React from 'react'

const Output = ({total}) => {
    return (
        <div>
            <div className='container'>
                <label>
                    Result
                </label>
                <input
                    type="number"
                    placeholder='Please enter number'
                    value={total}
                    readOnly={true}
                />
            </div>
        </div>
    )
}

export default Output
