import React, { Component } from 'react'
import { getApodAPI } from '../utils/api-utils.js'



export default class Apod extends Component {
    state = {
        description: '',
        media_type: '',
        title: '',
        url: ''
    }
    apod = async () => {
        const apodRes = await getApodAPI();
        this.setState({ 
            description: apodRes.description,
            media_type: apodRes.media_type, 
            title: apodRes.title,
            url: apodRes.url })
    }

    componentDidMount = async () => {
        await this.apod()
    }
    render() {
        return (
            <div className="flex-element">
                <h2>NASA Astronomy Picture of the Day</h2>
                {this.state.media_type === 'video' ? <iframe src={this.state.url} title='video of the day'></iframe> : 
                <img src={this.state.url} alt='img of the day'></img>}
                <h4>{this.state.title}</h4>
                <p className='apod'>{this.state.description}</p>
            </div>
        )
    }
}
