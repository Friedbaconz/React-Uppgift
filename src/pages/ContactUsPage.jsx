import React from 'react'
import Banner from '../components/sections/Banner/Banner'
import GetInTouch from '../components/sections/GetInTouch/GetInTouch'
import FindUs from '../components/sections/FindUs/FindUs'
import FAQs from '../components/sections/FAQs/FAQs'
import WhyChooseUs from '../components/sections/WhyChooseUs/WhyChooseUs'

function ContactUsPage() {
  return (
    <section>
        <Banner title="Contact Us" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."/>
        <GetInTouch/>
        <FindUs/>
        <FAQs/>
    </section>
  )
}

export default ContactUsPage