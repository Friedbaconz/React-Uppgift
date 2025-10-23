import React from 'react'
import Hero from '../components/sections/Hero/Hero'
import AboutUs from '../components/sections/AboutUs/AboutUs'
import Brands from '../components/sections/Brands/Brands'
import OurService from '../components/sections/OurService/OurService'
import WhyChooseUs from '../components/sections/WhyChooseUs/WhyChooseUs'

const HomePage = () => {
  return (
    <section>
      <Hero/>
      <AboutUs/>
      <Brands/>
      <OurService/>
      <WhyChooseUs/>
    </section>
  )
}

export default HomePage