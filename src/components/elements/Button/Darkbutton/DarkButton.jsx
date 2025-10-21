import React from 'react'
import './DarkButton.css'

function DarkButton({id, text}) {
  return (
    <div className="darkbutton-wrapper">
      <div className='darkbutton'>
        <label htmlFor={id} className="darkbutton-text">{text}</label>
      </div>
    </div>
  )
}

export default DarkButton