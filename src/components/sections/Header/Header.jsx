import React from 'react'
import './Header.css'
import Button from '../../elements/Button/Button'

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
                                    <img src="./public/Facebook.svg" alt="" class="navbar-img-icon" />
                                </div>
                                <div class="navbar-icons">
                                    <img src="./public/X.svg" alt="" class="navbar-img-icon" />
                                </div>
                                <div class="navbar-icons">
                                    <img src="./public/Instagram.svg" alt="" class="navbar-img-icon" />
                                </div>
                                <div class="navbar-icons">
                                    <img src="./public/Youtube.svg" alt="" class="navbar-img-icon" />
                                </div>
                            </div>
                        </div>
                        <div class="navbar-downer">
                                <img src="./public/Logo.svg" alt="" class="navbar-image"/>
                                <div class="Menu-selection">
                                    <p class="navbar-text">Home</p>
                                    <p class="navbar-text">About Us</p>
                                    <p class="navbar-text">Services</p>
                                    <p class="navbar-text">Contact Us</p>
                                </div>
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