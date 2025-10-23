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
                            <Introduction header="Why Choose Us" title="Choose Us For Exceptional Storage Solutions" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi non sodales augue. Phasellus eget elit gravida." />
                        </div>
                        <div className="whyus-items-wrapper">

                            <div className="whyus-listitems-wrapper">

                                <div className="whyus-listitem">
                                    <div className="whyus-listicon">
                                        <img src="./Lock.svg" alt="" className="whyus-listimg" />
                                    </div>
                                    <div className="whyus-listtext-wrapper">
                                        <p className="whyus-listtitle">Security and Safety</p>
                                        <p className="whyus-listtext">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                                    </div>
                                </div>

                                <div className="whyus-listitem">
                                    <div className="whyus-listicon">
                                        <img src="./Money.svg" alt="" className="whyus-listimg" />
                                    </div>
                                    <div className="whyus-listtext-wrapper">
                                        <p className="whyus-listtitle">Flexible and Affordable</p>
                                        <p className="whyus-listtext">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                                    </div>
                                </div>

                                <div className="whyus-listitem">
                                    <div className="whyus-listicon">
                                        <img src="./Clean.svg" alt="" className="whyus-listimg" />
                                    </div>
                                    <div className="whyus-listtext-wrapper">
                                        <p className="whyus-listtitle">Clean and Well-Maintained Facilities</p>
                                        <p className="whyus-listtext">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                                    </div>
                                </div>

                                <div className="whyus-listitem">
                                    <div className="whyus-listicon">
                                        <img src="./Clock.svg" alt="" className="whyus-listimg" />
                                    </div>
                                    <div className="whyus-listtext-wrapper">
                                        <p className="whyus-listtitle">24/7 and Convinient Access</p>
                                        <p className="whyus-listtext">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                                    </div>
                                </div>

                            </div>

                            <div className="whyus-screen-wrapper">
                                <div className="whyus-screen">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default WhyChooseUs