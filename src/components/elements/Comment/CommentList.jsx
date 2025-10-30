import React from 'react'
import './Comment.css'
import axios from 'axios'
import { useEffect } from 'react'
import Comment from './Comment'
import { useState } from 'react'

function CommentList() {
    const [testimonails, settestimonails] = useState([0])
    
    useEffect(() => {
        axios.get('https://win25-jsf-assignment.azurewebsites.net/api/testimonials')
            .then(res => {
                settestimonails(res.data);
            })
            .catch(err => {
                console.log(err);
            })
        const getData = async () => {
            const res = await fetch('https://win25-jsf-assignment.azurewebsites.net/api/testimonials')
            const data = await res.json()

            console.log(data)
        }
    
        getData()
    }, []);


  return (
    <div className='testimon-comment-wrapper'>
        {testimonails.map(testimonails =>
            (
                    
                
                <Comment key={testimonails.id} comment={testimonails.comment} name={testimonails.name} companyName={testimonails.companyName} avatarUrl={testimonails.avatarUrl} rating={testimonails.rating}/>
                
            )
        )}

        
    </div>
  )
}

export default CommentList