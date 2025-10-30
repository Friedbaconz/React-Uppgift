import axios from 'axios';
import React from 'react'
import BlogPost from './BlogPost'
import './BlogPost.css'
import { useEffect } from 'react';
import { useState } from 'react'

function BlogList() {
    const [blogs, setblogs] = useState([])
    
    useEffect(() => {
        axios.get('https://win25-jsf-assignment.azurewebsites.net/api/blogs')
            .then(res => {
                setblogs(res.data);
            })
            .catch(err => {
                console.log(err);
            })
        const getData = async () => {
            const res = await fetch('https://win25-jsf-assignment.azurewebsites.net/api/blogs')
            const data = await res.json()

            console.log(data)
        }
    
        getData()
    }, []);





  return (
    <div className="blog-container">
        {blogs.map(blogs =>
            (
                    
                <div className="blog-container">
                    <BlogPost key={blogs.id} description={blogs.description} imageUrl={blogs.imageUrl} created={blogs.created} title={blogs.title}/>
                </div>
            )
        )}
    </div>
  )
}

export default BlogList