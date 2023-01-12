import React from 'react'
import './Error.css'
import {BiErrorCircle} from 'react-icons/bi'
const Error = () => {
  return (
    <main className='error'>
      <div className='error-content'>
        <h2>Oh no.<br />An error has occurred</h2>
        <BiErrorCircle className='error-logo'/>
        <button type='button' onClick={() => {
              window.location.reload();
            }}>Reload</button>
      </div>
    </main>
  )
}

export default Error