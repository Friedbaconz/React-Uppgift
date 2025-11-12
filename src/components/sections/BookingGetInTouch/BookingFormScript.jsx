import React from 'react'
import './GetInBooking.css'
import Button from '../../elements/Button/Button'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'


function BookingFormScript() {
    const [FormData, setFormData] = useState({name: '', email: '', selectedUnit: '', purpose: ''})
    const [book, setbook] = useState([])
    const [submitted, setsubmitted] = useState(false)
    const [check, setcheck] = useState(false);
    
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({...FormData, [name]: value})
        e.preventDefault()
        const unitvalue = (FormData.selectedUnit)
        if (unitvalue == 'Small' || unitvalue == 'Medium' || unitvalue == 'Large' || unitvalue == 'Executive' ) {
            console.log(FormData);
            setcheck(false);
        }
        else {
            if (unitvalue == '') {
                
            }
            else {
                setcheck(true);
            }
        }
    }

    const submit = async (e) => {
        e.preventDefault()
        

        const res = await fetch ('https://win25-jsf-assignment.azurewebsites.net/api/booking', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(FormData)
        })

        if (res.ok) {
            setsubmitted(true)
            setFormData({name: '', email: '', selectedUnit: '', purpose: ''})
        }
    }
    
    if (submitted) {
        return (
            <div className='booking-fillbar-wrapper'>
                
                <p className='booking-input-name-extra'>We have received your booking request and will respond to you within 1-2 business days.</p>
                
            </div>
        )
    }

    return (
        <div className='booking-form-bg'>
            <form className="booking-fillbar-wrapper" onSubmit={submit}>
                <div className="booking-email-telephone">
                    <div className='booking-inputbar-wrapper'>
                        <label className="booking-input-name" forhtml="bookingname">Your Name</label>
                        <input className="booking-input" type="text" name="name" placeholder="Your name" value={FormData.name} onChange={handleChange} required />
                    </div>
                    <div className='booking-inputbar-wrapper'>
                        <label className="booking-input-name" forhtml="booking-email">Email</label>
                        <input className="booking-input" type="email" name="email" placeholder="Email" value={FormData.email} onChange={handleChange} required />
                    </div>
                </div>
                <div className='booking-inputbar-wrapper'>
                    <div className='booking-label-wrapper'>
                        <label className="booking-input-name" forhtml="booking-subject">Choose Unit </label> {check && <p className='div-text-name'>(Choose a valid option!) [Small, Medium, Large, Executive] *</p>}
                    </div>
                    <input className={`booking-input ${check && 'bookactive'}`} type="text" name="selectedUnit" placeholder="Choose Unit" value={FormData.selectedUnit} onChange={handleChange} required/>
                </div>
                <div className='booking-inputbar-wrapper'>
                    <label className="booking-input-name" forhtml="booking-comment">Storage purpose</label>
                    <textarea className="booking-input" name="purpose" placeholder="Describe your storage purpose so that we can match your request" id="booking-comment" value={FormData.purpose} onChange={handleChange} required/>
                </div>

                <div className="booking-button-wrapper">
                    <Button id="booking-form-btn" text="Book Unit" typ="submit" val="Submit" />
                </div>
            </form>
        </div>
    )
}

export default BookingFormScript