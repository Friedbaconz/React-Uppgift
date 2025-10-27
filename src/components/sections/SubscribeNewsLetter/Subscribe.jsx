import React from 'react'
import './Subscribe.css'
import Button from '../../elements/Button/Button'
import { useState } from 'react'

function Subscribe() {
    const [subscribe, setSubscribe] = useState("")


    const subscribeSumbit = ('submit', e =>{
        e.preventDefault();
        const subemail = (subscribe)
        const usersub = {
            subemail,
        }
        console.log(usersub);
    })

    return (
        <section>
            <div className="subscribe-bg">
                <div className="subscribe-wrapper">
                    <div className="subscribe-content">
                        <div className="subscribe-text-wrapper">
                            <div className='subscribe-text-box'>
                                <p className="subscribe-title">Subscribe Our Newsletter</p>
                            </div>
                            <div className='subscribe-text-box'>
                              <p className="subscribe-text">Subscribe to our newsletter to receive early discount offers, updates and info</p>  
                            </div>
                        </div>
                        <form className="subscribe-email-wrapper" onSubmit={subscribeSumbit}>
                            <div className="subscribe-emailbar-wrapper">
                                <input class="subscribe-email-input" type="email" name="email" placeholder="Enter your email" required value={subscribe} onChange={(e) => setSubscribe(e.target.value)}/>
                            </div>
                            <div className="subscribe-button">
                                <Button id="subscribe-btn" text="Submit" typ="submit" val="Submit" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Subscribe