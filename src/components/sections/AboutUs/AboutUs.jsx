import React from 'react'
import './AboutUs.css'
import Texttile from '../../elements/Texttile/Texttile'
import Button from '../../elements/Button/Button'

function AboutUs() {
  return (
    <section className="aboutus-section">
        <div className="aboutus-bg">
            <div className="aboutus-wrapper">
                <div className="aboutus-img-wrapper-group">
                    <div className="aboutus-img-group">
                        <div className="about-us-img-wrapper">
                        
                        </div>

                        <div className="aboutus-feed-bg">
                            <div className="aboutus-feed-img">
                                <div className="aboutus-feed-wrapper">
                                    <p className="aboutus-feed-number">12+</p>
                                    <p className="aboutus-feed-text">Year of Experience</p>
                                </div>
                                <div clas="aboutus-feed-wrapper">
                                    <p className="aboutus-feed-number">150K+</p>
                                    <p className="aboutus-feed-text">Satisfied Clients</p>
                                </div>
                                <div className="aboutus-feed-wrapper">
                                    <p className="aboutus-feed-number">35+</p>
                                    <p className="aboutus-feed-text">Warehouse</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="aboutus-info-group">
                    <div className="aboutus-info-wrapper">
                        <div className="aboutus-info-text-box-2">
                            <div className="aboutus-info-text-box">
                                <div className="aboutus-info-text-wrapper">
                                    <p className="aboutus-info-prelude">About Us</p>
                                    <p className="aboutus-info-title">Providing a Safe Space for Your Treasured Items</p>  
                                    <p className="aboutus-info-text">
                                    Lorem ipsum dolor sit amet, 
                                    consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. 
                                    Nulla quis nulla leo. Mauris ac blandit nisi, non sodales augue. 
                                    Phasellus eget elit gravida.
                                    </p> 
                                </div>
                            </div>
                        </div>
                        <div className="aboutus-texttile-box">
                            <Texttile id="first-AboutUs-Sqaure" title="Vision" text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan tium doloremque laudantium."/>
                            <Texttile id="Second-AboutUs-Sqaure" title="Mission" text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan tium doloremque laudantium."/>
                        </div>
                        <div className="aboutus-contact-box">
                            <div>
                                <Button id="AboutUs-Button" text="Discover More"/> 
                            </div>
                            <div className="aboutus-contact-info-box">
                                <div className="aboutus-contact-icon-wrapper">
                                    <img className="aboutus-contact-icon-img" src="./Phone.svg" alt="" /> 
                                </div>
                                <div className="aboutus-contact-info-wrapper">
                                    <div className="phone-aboutus-contact-div">
                                        <p className="aboutus-contact-info-text">More Information</p>
                                        <p className="aboutus-contact-info-number">+46 8 123 122 44</p>
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