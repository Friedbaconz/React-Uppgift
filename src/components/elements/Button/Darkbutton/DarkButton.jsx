import React from 'react'
import './DarkButton.css'

function DarkButton({id, text}) {
  return (
    <div className="button-wrapper">
      <div className='button'>
        <label htmlFor={id} className="button-text">{text}</label>
      </div>
    </div>
  )
}

export default DarkButton