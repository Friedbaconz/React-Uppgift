import React from 'react'
import './Hero.css'
import Button from '../../elements/Button'

function Hero() {
    return (
        <section class="hero-section">
            <div class="hero-bg">
                <div class="hero-wrapper">
                    <div class="hero-text-wrapper">
                        <div class="hero-text-box">
                            <p class="hero-text-info">Welcome to StorAid</p>
                            <p class="hero-text-title">Space Simplified, Storage Perfect</p>
                            <p class="hero-text-feed">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Aenean a sem magna. Etiam ac odio sit amet lorem fringilla sodales.
                                Cras lobortis, libero at iaculis luctus, nisi ex pellentesque nisi, at euismod sem ipsum ac dolor.
                            </p>
                        </div>
                        
                        <div class="hero-button-box">
                            <Button id="discover-more" text="Discover More" />
                        </div>
                    </div>
                    <div class="hero-img-wrapper">
                        <img class="hero-img" src="/HeroImg.svg" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero