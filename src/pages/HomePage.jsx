import React from 'react'
import Hero from '../components/sections/Hero/Hero'
import AboutUs from '../components/sections/AboutUs/AboutUs'
import Brands from '../components/sections/Brands/Brands'
import OurService from '../components/sections/OurService/OurService'

const HomePage = () => {
  return (
    <section>
      <Hero/>
      <AboutUs/>
      <Brands/>
      <OurService/>
    </section>
  )
}

export default HomePage