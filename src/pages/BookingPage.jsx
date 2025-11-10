import React from 'react'
import Banner from '../components/sections/Banner/Banner'
import WhyChooseUs from '../components/sections/WhyChooseUs/WhyChooseUs'
import LookingForSecure from '../components/sections/LookingForSecure/LookingForSecure'
import FAQs from '../components/sections/FAQs/FAQs'

function BookingPage() {
  return (
    <section>
        <Banner title="Booking" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."/>
        <WhyChooseUs/>
        <LookingForSecure/>
        <FAQs/>
    </section>
  )
}

export default BookingPage