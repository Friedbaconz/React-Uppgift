import React from 'react'
import './Banner.css'

function Banner({title, text }) {
  return (
    <section>
        <div className="banner-bg">
            <div className="banner-wrapper">
                <div className="banner-content">
                    <div className="banner-text-box">
                        <p className="banner-title">{title}</p>
                    </div>
                    <div className="banner-text-box">
                        <p className="banner-text">{text}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Banner