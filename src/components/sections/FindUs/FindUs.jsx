import React from 'react'
import './FindUs.css'

function FindUs() {
    return (
        <section>
            <div className="findus-bg">
                <div className="findus-wrapper">
                    <div className="findus-content">
                        <div className="findus-img-wrapper">
                            <img src="./findusIMG.svg" alt="" className="findus-img" />
                        </div>
                        <div className="findus-info-wrapper">
                            <div className="findus-text-wrapper">
                                <p className="findus-title">Find Us On:</p>
                                <p className="findus-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                            </div>

                            <div className="findus-icon-wrapper">
                                <div className="findus-listitem">
                                    <div className="findus-listicon">
                                        <img src="./Phone.svg" alt="" className="findus-listimg" />
                                    </div>
                                    <div className="findus-listtext-wrapper">
                                        <p className="findus-listtitle">Call Center</p>
                                        <p className="findus-listtext">+46 8 123 122 44</p>
                                    </div>
                                </div>
                                <div className="findus-listitem">
                                    <div className="findus-listicon">
                                        <img src="./email.svg" alt="" className="findus-listimg" />
                                    </div>
                                    <div className="findus-listtext-wrapper">
                                        <p className="findus-listtitle">Email Address</p>
                                        <p className="findus-listtext">contact@domain.com</p>
                                    </div>
                                </div>
                                <div className="findus-listitem">
                                    <div className="findus-listicon">
                                        <img src="./location.svg" alt="" className="findus-listimg" />
                                    </div>
                                    <div className="findus-listtext-wrapper">
                                        <p className="findus-listtitle">Location</p>
                                        <p className="findus-listtext">Klarabergsviadukten 90, Stockholm</p>
                                    </div>
                                </div>
                            </div>

                            <div className="findus-social-wrapper">
                                <div className="findus-ourmedia-wrapper">
                                    <p className="findus-ourmedia">Our Social Media</p>
                                </div>
                                <div className="findus-divider"></div>
                                <div className="findus-socialmedia-icon-wrapper">
                                    <div class="findus-links">
                                        <div class="findus-icons">
                                            <img src="./Facebook.svg" alt="" class="findus-img-icon" />
                                        </div>
                                        <div class="findus-icons">
                                            <img src="./X.svg" alt="" class="findus-img-icon" />
                                        </div>
                                        <div class="findus-icons">
                                            <img src="./Instagram.svg" alt="" class="findus-img-icon" />
                                        </div>
                                        <div class="findus-icons">
                                            <img src="./Youtube.svg" alt="" class="findus-img-icon" />
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

export default FindUs