import React from 'react'
import './Error.css'
import DarkButton from '../../elements/Button/Darkbutton/DarkButton'
import { NavLink } from 'react-router-dom'

function Error() {
  return (
    <section>
        <div className="error-bg">
            <div className="error-wrapper">
                <div className="error-content">
                    <p className='error-header'>Oops!</p>
                    <p className='error-title'>Page Not Found</p>
                    <p className='error-text'>Sorry, the page you are looking for does not exist. It may have been moved, removed altogether or is temporarily unavailable.</p>
                </div>
                <div className="error-button">
                    <NavLink to="/" className="back-button"><DarkButton text="Back To Home"/></NavLink>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Error