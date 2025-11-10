import React from 'react'
import Banner from '../components/sections/Banner/Banner'
import OurService from '../components/sections/OurService/OurService'
import Testimonials from '../components/sections/Testimonials/Testimonials'
import FAQs from '../components/sections/FAQs/FAQs'
import LookingForSecure from '../components/sections/LookingForSecure/LookingForSecure'

function ServicePage() {
  return (
    <section>
        <Banner title="Services" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."/>
        <OurService/>
        <Testimonials/>
        <FAQs/>
        <LookingForSecure/>
    </section>
  )
}

export default ServicePage