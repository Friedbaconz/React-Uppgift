import React from 'react'
import './WhyChooseUs.css'
import Introduction from '../../elements/Introduction/Introduction'

function WhyChooseUs() {
  return (
    <section>
        <div className="whyus-bg">
            <div className="whyus-wrapper">
                <div className="whyus-content">
                    <div className="whyus-introduction-wrapper">
                        <Introduction header="Why Choose Us" title="Choose Us For Exceptional Storage Solutions" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi non sodales augue. Phasellus eget elit gravida."/>
                    </div>
                </div>
            </div>
        </div>

    </section>
  )
}

export default WhyChooseUs