import React from 'react'
import Banner from '../components/sections/Banner/Banner'
import AboutUs from '../components/sections/AboutUs/AboutUs'
import Brands from '../components/sections/Brands/Brands'
import Testimonials from '../components/sections/Testimonials/Testimonials'
import WhyChooseUs from '../components/sections/WhyChooseUs/WhyChooseUs'

function AboutUsPage() {
  return (
    <section>
        <Banner title="About Us" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."/>
        <AboutUs/>
        <Brands/>
        <Testimonials/>
        <WhyChooseUs/>
    </section>
  )
}

export default AboutUsPage