import React, { useEffect } from 'react'
import './Accordian.css'
import { useState } from 'react'
import Accordian from './Accordian'
import axios from 'axios'
import { data } from 'react-router-dom'

function Accordianlist() {
    const [Index, setIndex] = useState(0)
    const [items, setitems] = useState([0])



    useEffect(() => {
        axios.get('https://win25-jsf-assignment.azurewebsites.net/api/faqs')
            .then(res => {
                setitems(res.data);
            })
            .catch(err => {
                console.log(err);
            })
        const getData = async () => {
            const res = await fetch('https://win25-jsf-assignment.azurewebsites.net/api/faqs')
            const data = await res.json()

            console.log(data)
        }
    
        getData()
    }, []);
    

    return (
        <div>

            {items.map(items =>
                (
                    
                    
                    <Accordian key={items.id} title={items.title} description={items.description} active={Index === items.id} isopen={() => setIndex(items.id)} />
                    
                )
            )}

        </div>
    )
}

export default Accordianlist