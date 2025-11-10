import React from 'react'
import './GetInBooking.css'
import Button from '../../elements/Button/Button'
import { useState } from 'react'


function BookingFormScript() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [bookunit, setBookUnit] = useState("");
    const [bookcomment, setBookComment] = useState("");
    const [check, setcheck] = useState(false);


    const submit = ('submit', e => {
        e.preventDefault();
        const username = (name)
        const useremail = (email)
        const userbookingunit = (bookunit)
        const userstoragepurpose = (bookcomment)
        const user = {
            username,
            useremail,
            userbookingunit,
            userstoragepurpose,
        }

        if (userbookingunit == 'Small' || userbookingunit == 'Medium' || userbookingunit == 'Large' || userbookingunit == 'Executive') {
            console.log(user);
            setcheck(false);
        }
        else {
            setcheck(true);
        }
        

    })
    return (
        <div>
            <form className="booking-fillbar-wrapper" onSubmit={submit}>
                <div className="booking-email-telephone">
                    <div className='booking-inputbar-wrapper'>
                        <label className="booking-input-name" forhtml="bookingname">Your Name</label>
                        <input className="booking-input" type="text" placeholder="text" value={name} onChange={(e) => setName(e.target.value)} required />
                    </div>
                    <div className='booking-inputbar-wrapper'>
                        <label className="booking-input-name" forhtml="booking-email">Email</label>
                        <input className="booking-input" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                </div>
                <div className='booking-inputbar-wrapper'>
                    <div className='booking-label-wrapper'>
                        <label className="booking-input-name" forhtml="booking-subject">Choose Unit </label> {check && <p className='div-text-name'>(Choose a valid option!) [Small, Medium, Large, Executive] *</p>}
                    </div>
                    <input className={`booking-input ${check && 'bookactive'}`} type="text" placeholder="Choose Unit" value={bookunit} onChange={(e) => setBookUnit(e.target.value)} required/>
                </div>
                <div className='booking-inputbar-wrapper'>
                    <label className="booking-input-name" forhtml="booking-comment">Storage purpose</label>
                    <textarea className="booking-input" placeholder="Describe your storage purpose so that we can match your request" id="booking-comment" value={bookcomment} onChange={(e) => setBookComment(e.target.value)} required/>
                </div>

                <div className="booking-button-wrapper">
                    <Button id="booking-form-btn" text="Book Unit" typ="submit" val="Submit" />
                </div>
            </form>
        </div>
    )
}

export default BookingFormScript