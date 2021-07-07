import React, { Component } from 'react'
import { getApodAPI } from './fetch-utils'



export default class Apod extends Component {
    render() {
            const apod = getApodAPI();

        return (
            <div>
                {apod.media_type === 'video' ? <video src={apod.url} alt='video of the day'></video> : 
                <img src={apod.url} alt='img of the day'></img>}
            </div>
        )
    }
}
