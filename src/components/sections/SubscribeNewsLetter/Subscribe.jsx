import React from 'react'
import './Subscribe.css'
import Button from '../../elements/Button/Button'

function Subscribe() {
    return (
        <section>
            <div className="subscribe-bg">
                <div className="subscribe-wrapper">
                    <div className="subscribe-content">
                        <div className="subscribe-text-wrapper">
                            <div className='subscribe-text-box'>
                                <p className="subscribe-title">Subscribe Our Newsletter</p>
                            </div>
                            <div className='subscribe-text-box'>
                              <p className="subscribe-text">Subscribe to our newsletter to receive early discount offers, updates and info</p>  
                            </div>
                        </div>
                        <div className="subscribe-email-wrapper">
                            <div className="subscribe-emailbar-wrapper">
                                <input class="subscribe-email-input" type="email" name="email" placeholder="Enter your email" required></input>
                            </div>
                            <div className="subscribe-button">
                                <Button text="Submit" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Subscribe