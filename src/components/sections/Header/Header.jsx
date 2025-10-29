import React from 'react'
import './Header.css'
import Button from '../../elements/Button/Button'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            
            <div class="Navbar">
                <div class="bg-navbar">
                    <div class="navbar-wrapper">
                        <div class="navbar-upper">
                            <div class="domain">
                                <div class="telephone">
                                        <i class="bi bi-telephone-fill" id="icon-img"></i>
                                        <p>+46 8 123 122 44</p>
                                </div>
                                <div class="email">
                                        <i class="bi bi-envelope-open-fill" id="icon-img"></i>
                                        <p>contact@domain.com</p>
                                </div>
                            </div>
                            <div class="navbar-links">
                                <div class="navbar-icons">
                                    <img src="./Facebook.svg" alt="" class="navbar-img-icon" />
                                </div>
                                <div class="navbar-icons">
                                    <img src="./X.svg" alt="" class="navbar-img-icon" />
                                </div>
                                <div class="navbar-icons">
                                    <img src="./Instagram.svg" alt="" class="navbar-img-icon" />
                                </div>
                                <div class="navbar-icons">
                                    <img src="./Youtube.svg" alt="" class="navbar-img-icon" />
                                </div>
                            </div>
                        </div>
                        <div class="navbar-downer">
                                <img src="./Logo.svg" alt="" class="navbar-image"/>
                                <nav class="Menu-selection">
                                    <NavLink to="/">Home</NavLink>
                                    <NavLink to="/AboutUsPage">About Us</NavLink>
                                    <NavLink to="/ServicePage">Services</NavLink>
                                    <NavLink to="/ContactUsPage">Contact Us</NavLink>
                                </nav>
                                <div class="navbar-button-box">
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