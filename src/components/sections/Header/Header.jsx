import React from 'react'
import './Header.css'
import Button from '../../elements/Button/Button'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            
            <div className="Navbar">
                <div className="bg-navbar">
                    <div className="navbar-wrapper">
                        <div className="navbar-upper">
                            <div className="domain">
                                <div className="telephone">
                                        <i className="bi bi-telephone-fill" id="icon-img"></i>
                                        <p>+46 8 123 122 44</p>
                                </div>
                                <div className="email">
                                        <i className="bi bi-envelope-open-fill" id="icon-img"></i>
                                        <p>contact@domain.com</p>
                                </div>
                            </div>
                            <div className="navbar-links">
                                <div className="navbar-icons">
                                    <img src="./Facebook.svg" alt="" className="navbar-img-icon" />
                                </div>
                                <div className="navbar-icons">
                                    <img src="./X.svg" alt="" className="navbar-img-icon" />
                                </div>
                                <div className="navbar-icons">
                                    <img src="./Instagram.svg" alt="" className="navbar-img-icon" />
                                </div>
                                <div className="navbar-icons">
                                    <img src="./Youtube.svg" alt="" className="navbar-img-icon" />
                                </div>
                            </div>
                        </div>
                        <div className="navbar-downer">
                                
                                    <NavLink to="/">
                                        <img src="./Logo.svg" alt="" className="navbar-image"/>
                                    </NavLink>   
                                
                                
                                <nav className="Menu-selection">
                                    <NavLink to="/">Home</NavLink>
                                    <NavLink to="/AboutUsPage">About Us</NavLink>
                                    <NavLink to="/ServicePage">Services</NavLink>
                                    <NavLink to="/ContactUsPage">Contact Us</NavLink>
                                    <NavLink to="/BookingPage">Booking</NavLink>
                                </nav>
                                <div className="navbar-button-box">
                                  <Button id="navbar-button" text="Book Now" />
                                </div>
                        </div>
                    </div>
                </div>
            </div>

        </header>
    )
}

export default Header