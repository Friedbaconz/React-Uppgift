import React from 'react'
import './Hero.css'
import Button from '../../elements/Button/Button'
import DarkButton from '../../elements/Button/Darkbutton/DarkButton'

function Hero() {
    return (
        <section className="hero-section">
            <div className="hero-bg">
                <div className="hero-wrapper">
                    <div className="hero-text-wrapper">
                        <div className="hero-text-box">
                            <p className="hero-text-info">Welcome to StorAid</p>
                            <p className="hero-text-title">Space Simplified, Storage Perfect</p>
                            <p className="hero-text-feed">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Aenean a sem magna. Etiam ac odio sit amet lorem fringilla sodales.
                                Cras lobortis, libero at iaculis luctus, nisi ex pellentesque nisi, at euismod sem ipsum ac dolor.
                            </p>
                        </div>
                        
                        <div className="hero-button-box">
                            <DarkButton id="discover-more" text="Discover More"/>
                        </div>
                    </div>
                    <div className="hero-img-wrapper">
                        <img className="hero-img" src="/HeroImg.svg" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero