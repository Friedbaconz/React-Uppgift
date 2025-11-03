import React from 'react'
import './Comment.css'
import { useState } from 'react'
import { useEffect } from 'react'

function Comment({name,companyName,comment,avatarUrl,rating}) {

    
    
    




    return (
        <div className="testimon-comment">
            <div className="testimon-comment-box">
                <div className="testimon-rating">
                    {(rating) > 0 && <i className="bi bi-star-fill" ></i>}
                    {(rating) > 1 && <i className="bi bi-star-fill" ></i>}
                    {(rating) > 2 && <i className="bi bi-star-fill" ></i>}
                    {(rating) > 3 && <i className="bi bi-star-fill" ></i>}
                    {(rating) > 4 && <i className="bi bi-star-fill" ></i>}
                </div>
                <div className="testimon-comment-text-wrapper">
                    <p className="testimon-comment-text">{comment}</p>
                </div>
                <div className="testimon-comment-profile-wrapper">
                    <div className="testimon-profile-img">
                        <img className="testimon-profile-img-source" src={avatarUrl} alt="..."/>
                    </div>
                    <div className="testimon-profile-text">
                        <div className="testimon-profile-text-box">
                            <p className="testimon-profile-name">{name}</p>
                            <p className="testimon-profile-work">{companyName}</p>
                        </div>
                    </div>
                </div>
                <div className="testimon-tag-wrapper">
                    <img className="testimon-tag" src="./CommentTag.svg" />
                </div>
            </div>
        </div>
    )
}

export default Comment