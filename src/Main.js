import React, { Component } from 'react'
import LocationPrompt from './LocationPrompt';

export default class Main extends Component {
    render() {
        return (
            <div>
                <img src='https://www.7timer.info/bin/astro.php?lon=-122.17&lat=45.09&ac=0&lang=en&unit=british&output=internal&tzshift=0' alt='yup'></img>
                <h1>Main Page</h1>
                <LocationPrompt></LocationPrompt>
            </div>
        )
    }
}
