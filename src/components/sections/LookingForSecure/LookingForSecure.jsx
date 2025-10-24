import React from 'react'
import './LookingForSecure.css'
import DarkButton from '../../elements/Button/Darkbutton/DarkButton'

function LookingForSecure() {
  return (
    <section>
        <div className="Looking-bg">
            <div className="Looking-wrapper">
                <div className="Looking-content">
                    <div className="Looking-title-wrapper">
                        <p className="Looking-title">Looking for Secure and Flexible Storage? Find Your Perfect Fit With Us.</p>
                    </div>
                    <div className="Looking-text-wrapper">
                        <p className="Looking-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi non sodales augue. Phasellus eget elit gravida.</p>
                    </div>
                    <div className="Looking-button-wrapper">
                        <DarkButton text="Book Now"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default LookingForSecure