import React, { useEffect, useState } from 'react'
import { getApodAPI } from '../utils/api-utils.js'

export default function Apod() {
    const [{description, media_type, title, url}, setState] = useState({
        description: '',
        media_type: '',
        title: '',
        url: ''
    })

    useEffect(() => {
        getApodAPI()
            .then((res) => setState({ 
                description: res.explanation,
                media_type: res.media_type, 
                title: res.title,
                url: res.url }))
    }, [])

    return (
        <div className="flex-element">
            <h2>NASA Astronomy Picture of the Day</h2>
            {media_type === 'video' ? <iframe src={url} title='video of the day'></iframe> : 
            <img src={url} alt='img of the day'></img>}
            <h4>{title}</h4>
            <p className='apod'>{description}</p>
        </div>
    )
}
