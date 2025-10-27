import React from 'react'
import './Button.css'

function Button({id, text, typ, val}) {
  return (
    <div className="button-wrapper">
      <button className='button' type={typ} id={id} value={val}>
        <label className="button-text">{text}</label>
      </button>
    </div>
  )
}

export default Button