import React from 'react'
import './BlogPost.css'

function BlogPost({created,title,imageUrl,description}) {
  return (
    <div className="blogpost-bg">
        <div className="blogpost-wrapper">
            <div className="blogpost-screen">
                <img className="blogpost-img" src={imageUrl} />
            </div>
            <div className="blogpost-date-wrapper">
                <img className="blogpost-date-icon" src="./Date.svg"/>
                <p className="blogpost-date">{created}</p>
            </div>
            <div className="blogpost-text-wrapper">
                <div className="blogpost-text-box">
                    <p className="blogpost-title">{title}</p>
                </div>
                <div className="blogpost-text-box">
                    <p className="blogpost-text">{description}</p>
                </div>
            </div>
            <div className="blogpost-readmore-wrapper">
                <a href="..." className="blogpost-readmore">
                    <p className="blogpost-readmore-text">Read more</p>
                    <i className="bi bi-arrow-right" id="blogpost-arrow"></i>
                </a>
            </div>
        </div>
    </div>
  )
}

export default BlogPost