import React from 'react'
import './Introduction.css'

function Introduction({ text, header, title }) {
    return (

        <div className="introduction-wrapper">
            <div className="introduction-header-wrapper">
                <p className="introduction-title">{header}</p>
            </div>
            <div className="introduction-info">
                <div className="introduction-info-wrapper">
                    <div className="introduction-info-title-wrapper">
                        <p className="introduction-info-title">{title}</p>
                    </div>
                    <div className="introduction-info-text-wrapper">
                        <p className="introduction-info-text">
                            {text}
                        </p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Introduction