import React, { Component } from 'react'
import { getApodAPI } from './api-utils.js'



export default class Apod extends Component {
    state = {
        media_type: '',
        url: ''
    }
    apod = async () => {
        const apodRes = await getApodAPI();
        console.log(apodRes.url);
        this.setState({ media_type: apodRes.media_type, url: apodRes.url })
    }

    componentDidMount = async () => {
        await this.apod()
    }
    render() {

        return (
            <div>
                <h2>NASA Astronomy Picture of the Day</h2>
                {this.state.media_type === 'video' ? <iframe src={this.state.url} title='video of the day'></iframe> : 
                <img src={this.state.url} alt='img of the day'></img>}
            </div>
        )
    }
}
