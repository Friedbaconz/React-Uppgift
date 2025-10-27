import React from 'react'
import './GetInTouch.css'
import Button from '../../elements/Button/Button'
import { useState } from 'react'



function GetinFormScript() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [subject, setSubject] = useState("");
    const [comment, setComment] = useState("");
    

    const submit = ('submit', e => {
        e.preventDefault();

        const username = (name)
        const useremail = (email)
        const userphone = (phone)
        const usersubject = (subject)
        const usercomment = (comment)





        const user = {
            username,
            useremail,
            userphone,
            usersubject,
            usercomment,
        }
        console.log(user);
        
    })

    return (
    
        <form className="getin-fillbar-wrapper" onSubmit={submit}>
            <div className='getin-inputbar-wrapper'>
                <label className="getin-input-name" forhtml="getinname">Your Name</label>
                <input class="getin-input" type="text" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} required/>
            </div>
            <div className="getin-email-telephone">
                <div className='getin-inputbar-wrapper'>
                    <label className="getin-input-name" forhtml="getin-email">Email</label>
                    <input class="getin-input" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                </div>
                <div className='getin-inputbar-wrapper'>
                    <label className="getin-input-name" forhtml="getin-phone">Telephone</label>
                    <input class="getin-input" type="tel" placeholder="Telephone" pattern="[0-9]{2}-[0-9]{3}-[0-9]{4}" value={phone} onChange={(e) => setPhone(e.target.value)}/>
                </div>
            </div>
            <div className='getin-inputbar-wrapper'>
                <label className="getin-input-name" forhtml="getin-subject">Subject</label>
                <input class="getin-input" type="text" placeholder="How can we help you" value={subject} onChange={(e) => setSubject(e.target.value)}/>
            </div>
            <div className='getin-inputbar-wrapper'>
                <label className="getin-input-name" forhtml="getin-comment">Comments / Questions</label>
                <textarea class="getin-input" placeholder="Comments" id="getin-comment" value={comment} onChange={(e) => setComment(e.target.value)}/>
            </div>

            <div className="getin-button-wrapper">
                <Button id="getin-form-btn" text="Submit" typ="submit" val="Submit" />
            </div>
        </form>
    )
}

export default GetinFormScript