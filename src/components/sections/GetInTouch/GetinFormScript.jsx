import React from 'react'
import './GetInTouch.css'
import Button from '../../elements/Button/Button'
import { useState } from 'react'



function GetinFormScript() {
    const [formData, setformData] = useState({ name: '', email: '', phoneNumber: '', subject: '', comment: '' })
    const [submitted, setsubmitted] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target
        setformData({ ...formData, [name]: value })
        e.preventDefault()
    }

    const submit = async (e) => {
        e.preventDefault()


        const res = await fetch('https://win25-jsf-assignment.azurewebsites.net/api/contact', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })

        if (res.ok) {
            setsubmitted(true)
            setformData({ name: '', email: '', phoneNumber: '', subject: '', comment: '' })
        }
    }

    if (submitted) {
        return (
            <form className='getin-fillbar-wrapper'>

                <p className='booking-input-name-extra'>We have received your booking request and will respond to you within 1-2 business days.</p>

            </form>
        )
    }

    return (
        <div>
            <form className="getin-fillbar-wrapper" onSubmit={submit}>
                <div className='getin-inputbar-wrapper'>
                    <label className="getin-input-name" forhtml="getinname">Your Name</label>
                    <input className="getin-input" type="text" name="name" placeholder="Your name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="getin-email-telephone">
                    <div className='getin-inputbar-wrapper'>
                        <label className="getin-input-name" forhtml="getin-email">Email</label>
                        <input className="getin-input" type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div className='getin-inputbar-wrapper'>
                        <label className="getin-input-name" forhtml="getin-phone">Telephone</label>
                        <input className="getin-input" type="tel" name="phoneNumber" placeholder="Telephone" pattern="[0-9]{2}-[0-9]{3}-[0-9]{4}" value={formData.phoneNumber} onChange={handleChange} />
                    </div>
                </div>
                <div className='getin-inputbar-wrapper'>
                    <label className="getin-input-name" forhtml="getin-subject">Subject</label>
                    <input className="getin-input" type="text" name="subject" placeholder="How can we help you" value={formData.subject} onChange={handleChange} />
                </div>
                <div className='getin-inputbar-wrapper'>
                    <label className="getin-input-name" forhtml="getin-comment">Comments / Questions</label>
                    <textarea className="getin-input" name="comment" placeholder="Comments" id="getin-comment" value={formData.comment} onChange={handleChange} />
                </div>

                <div className="getin-button-wrapper">
                    <Button id="getin-form-btn" text="Submit" typ="submit" val="Submit" />
                </div>
            </form>
        </div>

    )
}

export default GetinFormScript