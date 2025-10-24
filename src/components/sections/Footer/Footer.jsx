import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer>
        <div className="footer-bg">
            <div className="footer-wrapper">
                <div className="footer-content">
                    <div className="footer-left">
                        <div className='footer-trademark-wrapper'>
                            <p className="footer-trademark">© 2025 StorAid, All rights reserved.</p>
                        </div>
                    </div>
                    <div className="footer-right">
                        <div className="footer-rightwrapper">

                            <div className="footer-links-wrapper">
                                <div className='footer-icon'>
                                    <img className="footer-icon-img"src="./circlearrow.svg" alt="" />
                                </div>
                                <a href="...">
                                    <p className="footer-links">Terms & Conditions</p>
                                </a>
                            </div>

                            <div className="footer-links-wrapper">
                                <div className='footer-icon'>
                                    <img className="footer-icon-img"src="./circlearrow.svg" alt="" />
                                </div>
                                <a href="">
                                   <p className="footer-links">Privacy Policy</p> 
                                </a>
                            </div>

                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer