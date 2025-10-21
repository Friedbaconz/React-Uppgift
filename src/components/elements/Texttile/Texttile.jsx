import React from 'react'
import './Texttile.css'

function Texttile({title, text, id} ) {
  return (
    <div className="text-tile-wrapper">
        <div htmlFor={id} className="text-tile-container">  
            <label className='text-tile-title'>{title}</label>
            <p className='text-tile-feed'>{text}</p>
        </div> 
    </div>
  )
}

export default Texttile