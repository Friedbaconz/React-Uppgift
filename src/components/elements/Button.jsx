import React from 'react'
import './Button.css'

function Button({id, text}) {
  return (
    <div className="button">
        <label htmlFor={id} className="button-text">{text}</label>
    </div>
  )
}

export default Button