import React from 'react'
import './Subscribe.css'
import { useState } from 'react'
import Button from '../../elements/Button/Button'

function Subscribebar() {
    const [SubData, setSubData] = useState({ email: '' })
    const [submitted, setsubmitted] = useState(false)

    const useremail = SubData.email
    
    const handleChange = (e) => {
        const { name, value } = e.target
        setSubData({ ...SubData, [name]: value })

    }

    const submit = async (e) => {
        e.preventDefault()


        const res = await fetch('https://win25-jsf-assignment.azurewebsites.net/api/subscribe', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(SubData)
        })

        if (res.ok) {
            setsubmitted(true)
            setformData({ email: '' })
        }

    }

    if (submitted) {
        return (
            <div className='Sub-fillbar-wrapper-extra'>

                <p className='Sub-input-name-extra'> {useremail} was successfully registered to the newsletter list.</p>

            </div>
        )
    }




    return (
        <form className="subscribe-email-wrapper" onSubmit={submit}>
            <div className="subscribe-emailbar-wrapper">
                <input className="subscribe-email-input" type="email" name="email" placeholder="Enter your email" required value={SubData.email} onChange={handleChange} />
            </div>
            <div className="subscribe-button">
                <Button id="getin-form-btn" text="Submit" typ="submit" val="Submit" />
            </div>
        </form>
    )
}

export default Subscribebar