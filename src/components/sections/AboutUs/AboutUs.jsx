import React from 'react'
import './AboutUs.css'
import Texttile from '../../elements/Texttile/Texttile'
import Button from '../../elements/Button/Button'

function AboutUs() {
  return (
    <section class="aboutus-section">
        <div class="aboutus-bg">
            <div class="aboutus-wrapper">
                <div class="aboutus-img-wrapper-group">
                    <div class="aboutus-img-group">
                        <div class="about-us-img-wrapper">
                        <img class="aboutus-img" src="" alt="" /> 
                        </div>

                        <div class="aboutus-feed-bg">
                            <div class="aboutus-feed-img">
                                <div class="aboutus-feed-wrapper">
                                    <p class="aboutus-feed-number">12+</p>
                                    <p class="aboutus-feed-text">Year of Experience</p>
                                </div>
                                <div clas="aboutus-feed-wrapper">
                                    <p class="aboutus-feed-number">150K+</p>
                                    <p class="aboutus-feed-text">Satisfied Clients</p>
                                </div>
                                <div class="aboutus-feed-wrapper">
                                    <p class="aboutus-feed-number">35+</p>
                                    <p class="aboutus-feed-text">Warehouse</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div class="aboutus-info-group">
                    <div class="aboutus-info-wrapper">
                        <div class="aboutus-info-text-box-2">
                            <div class="aboutus-info-text-box">
                                <div class="aboutus-info-text-wrapper">
                                    <p class="aboutus-info-prelude">About Us</p>
                                    <p class="aboutus-info-title">Providing a Safe Space for Your Treasured Items</p>  
                                    <p class="aboutus-info-text">
                                    Lorem ipsum dolor sit amet, 
                                    consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. 
                                    Nulla quis nulla leo. Mauris ac blandit nisi, non sodales augue. 
                                    Phasellus eget elit gravida.
                                    </p> 
                                </div>
                            </div>
                        </div>
                        <div class="aboutus-texttile-box">
                            <Texttile id="first-AboutUs-Sqaure" title="Vision" text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan tium doloremque laudantium."/>
                            <Texttile id="Second-AboutUs-Sqaure" title="Mission" text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan tium doloremque laudantium."/>
                        </div>
                        <div class="aboutus-contact-box">
                            <div>
                                <Button id="AboutUs-Button" text="Discover More"/> 
                            </div>
                            <div class="aboutus-contact-info-box">
                                <div class="aboutus-contact-icon-wrapper">
                                    <img class="aboutus-contact-icon-img" src="./Phone.svg" alt="" /> 
                                </div>
                                <div class="aboutus-contact-info-wrapper">
                                    <div class="phone-aboutus-contact-div">
                                        <p class="aboutus-contact-info-text">More Information</p>
                                        <p class="aboutus-contact-info-number">+46 8 123 122 44</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutUs