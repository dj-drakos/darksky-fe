import React, { Component } from 'react'
import LocationPrompt from './LocationPrompt';
import Apod from './Apod';

export default class Main extends Component {
    handleSearch = () => {
        this.history.push('./astro-list')
    }
    render() {
        return (
            <div>
                <h1>Main Page</h1>
                <LocationPrompt></LocationPrompt>
                <Apod />
                <button onClick={this.handleSearch}></button>
            </div>
        )
    }
}
