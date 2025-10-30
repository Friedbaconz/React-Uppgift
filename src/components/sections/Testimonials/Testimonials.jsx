import React from 'react'
import './Testimonials.css'
import CommentList from '../../elements/Comment/CommentList'

function Testimonials() {
  return (
    <section>
        <div className="testimon-bg">
            <div className="testimon-wrapper">
                <div className="testimon-content">
                    <div className="testimon-text-wrapper">
                        <div className="Testimon-box">
                            <p className="testimon-header">Testimonials</p>  
                        </div>
                        <div className="Testimon-box">
                            <p className="testimon-title">See What Our Clients Have to Say</p>
                        </div>
                        <div className="Testimon-box">
                            <p className="testimon-text-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. 
                            Nulla quis nulla leo. Mauris ac blandit nisi non sodales augue. 
                            Phasellus eget elit gravida.
                            </p>
                        </div>
                    </div>
                    <div className="testimon-comment-wrapper">

                        
                        <CommentList/>
                        

                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Testimonials