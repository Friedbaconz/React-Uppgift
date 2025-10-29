import React from 'react'
import './Accordian.css'

function Accordian({ active, isopen, description,title,id }) {



    return (
        
            <div id={id} className="acord-wrapper">
                <div className={`acord-wrapper-inner ${active && 'isactive'}`} onClick={isopen}>
                    <div className="acord-title-wrapper">
                        <p className="acord-title">{title}</p>
                    </div>
                    <div className="acord-icon-wrapper">
                        <i class="bi bi-chevron-down" id="acord-icon-arrow"></i>
                        <i class="bi bi-chevron-up" id="acord-icon-arrow-down"></i>
                    </div>
                </div>

                {active && (<div className="acord-text-wrapper" ><p>{description}</p></div>)}


            </div>
        
    )
}

export default Accordian