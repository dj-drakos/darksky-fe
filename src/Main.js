import React, { Component } from 'react'
import LocationPrompt from './LocationPrompt';

export default class Main extends Component {
    render() {
        return (
            <div>
                <h1>Main Page</h1>
                <LocationPrompt></LocationPrompt>
            </div>
        )
    }
}
