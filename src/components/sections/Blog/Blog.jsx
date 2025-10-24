import React from 'react'
import './Blog.css'
import Introduction from '../../elements/Introduction/Introduction'
import BlogPost from '../../elements/BlogPost/BlogPost'

function Blog() {
  return (
    <section>
        <div className="blog-bg">
            <div className="blog-wrapper">
                <div className="blog-content">
                    <div className="blog-intro">
                        <Introduction header="Latest Blog and News" title="Check Out Our Latest Blog and News Update" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi non sodales augue. Phasellus eget elit gravida."/>
                    </div>
                    <div className="blog-post-wrapper">
                        <BlogPost/>  
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Blog