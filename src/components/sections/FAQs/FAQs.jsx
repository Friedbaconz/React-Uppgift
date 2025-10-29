import React from 'react'
import './FAQs.css'
import Accordianlist from '../../elements/Accordian/Accordianlist'

function FAQs() {
    


  return (
    <section>
        <div className="faq-bg">
            <div className="faq-wrapper">
                <div className="faq-content">
                    <div className="faq-intro-wrapper">
                        <div className='Faq-text-box'>
                            <p className="faq-intro-header">FAQs</p>
                        </div>
                        <div className='Faq-text-box'>
                            <p className="faq-intro-title">Frequently Ask Questions</p>
                        </div>
                        <div className='Faq-text-box'>
                            <p className="faq-into-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        </div>
                    </div>

                    <div className="faq-accordian-wrapper">
                        <Accordianlist/>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default FAQs