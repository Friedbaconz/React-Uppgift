import React from 'react'
import './GetInBooking.css'
import BookingFormScript from './BookingFormScript'

function GetInBooking() {
  return (
    <section>
        <div className="booking-bg">
            <div className="booking-wrapper">
                <div className="booking-content">
                    <div className="booking-intro-wrapper">
                        <div className="booking-intro-box">
                            <p className='booking-head'>Booking Unit</p>
                            <p className='booking-title'>Book Your Storage Unit Now</p>
                            <p className='booking-title'>& Simplify Your Life!</p>
                        </div>
                        <div className="booking-screen-wrapper">
                            
                        </div>
                    </div>
                    <div className='booking-rightside-wrapper'>
                        <div className='booking-rightside-wrapper-second'>
                            <div>
                                <p className="booking-intro-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi non sodales augue. Phasellus eget elit gravida.</p>
                            </div>
                            <div className="booking-accountbox-wrapper">
                                <BookingFormScript/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default GetInBooking