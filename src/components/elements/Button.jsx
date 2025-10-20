import React, { useState } from 'react'
import './Button.css'


function Button({ id, text, dark}) {
  const [ShowDarkStatus, setShowDarkStatus] = useState(false)
  const [Dark, setDark] = useState(false)
  Dark = () => {
    setShowDarkStatus(value =>!value)
  }
  
  return (
    <div className="container">
      <div className={`button ${ShowDarkStatus ? 'active' : ''}`}>
        <label htmlFor={id} className="button-text" mode={dark}>{text}</label>
      </div>
    
    </div>
  )
}

export default Button