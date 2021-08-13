import React, { Component } from 'react'
import LocationPrompt from './LocationPrompt';
import Apod from './Apod';

export default class Main extends Component {

    render() {
        return (
            <div  className='main'>
                <h1>Greetings Earthling</h1>
                <div className='flex'>
                    <LocationPrompt />
                    <Apod />
                </div>
            </div>
        )
    }
}
