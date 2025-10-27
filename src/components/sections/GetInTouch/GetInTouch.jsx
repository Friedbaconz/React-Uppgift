import React from 'react'
import './GetInTouch.css'
import './GetinFormScript.jsx'
import GetinFormScript from './GetinFormScript.jsx'


function GetInTouch() {
  return (
    <section>
        <div className="getin-bg">
            <div className="getin-wrapper">
                <div className="getin-content">
                    <div className="getin-intro-wrapper">
                        <div className="getin-intro-box">
                            <p className='getin-head'>Get in Touch</p>
                            <p className='getin-title'>Get Personalized Assistance</p>
                            <p className='getin-title'>- Contact Us</p>
                            <p className="getin-intro-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo</p>
                        </div>
                        <div className="getin-screen-wrapper">
                            
                        </div>
                    </div>
                    <div className="getin-accountbox-wrapper">
                        <GetinFormScript/>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default GetInTouch