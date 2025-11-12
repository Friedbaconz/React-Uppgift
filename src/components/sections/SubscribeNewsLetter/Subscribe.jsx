import React from 'react'
import './Subscribe.css'
import Subscribebar from './Subscribebar'

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
                        <Subscribebar/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Subscribe