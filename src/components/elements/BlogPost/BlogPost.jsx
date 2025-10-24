import React from 'react'
import './BlogPost.css'

function BlogPost() {
  return (
    <div className="blogpost-bg">
        <div className="blogpost-wrapper">
            <div className="blogpost-screen">
                <img className="blogpost-img" src="" alt="" />
            </div>
            <div className="blogpost-date-wrapper">
                <img className="blogpost-date-icon" src="./Date.svg" alt="" />
                <p className="blogpost-date">Date</p>
            </div>
            <div className="blogpost-text-wrapper">
                <div className="blogpost-text-box">
                    <p className="blogpost-title">Title</p>
                </div>
                <div className="blogpost-text-box">
                    <p className="blogpost-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a sem magna. Etiam ac odio sit amet lorem…</p>
                </div>
            </div>
            <div className="blogpost-readmore-wrapper">
                <a href="..." className="blogpost-readmore">
                    <p className="blogpost-readmore-text">Read more</p>
                    <i class="bi bi-arrow-right" id="blogpost-arrow"></i>
                </a>
            </div>
        </div>
    </div>
  )
}

export default BlogPost