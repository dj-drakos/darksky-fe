import React from 'react'
import { getLocationAPI } from './api-utils.js'
import { setLocation, getLocation } from './LocalStorage'

export default class LocationPrompt extends React.Component {
    state = {
        location: '',
        url: ''
    }

    locationChange = e => {
        this.setState({ 
            location: e.target.value, 
            // url: `https://www.7timer.info/bin/astro.php?lon=${e.target.value.longitude}&lat=${e.target.value.latitude}&ac=0&lang=en&unit=british&output=internal&tzshift=0` 
        })
    }
    
    urlChange = e => {
        this.setState({ 
            // location: e.target.value, 
            url: `https://www.7timer.info/bin/astro.php?lon=${this.state.location.longitude}&lat=${this.state.location.latitude}&ac=0&lang=en&unit=british&output=internal&tzshift=0` 
        })
    }
    
    handleSubmit = async e => {
        e.preventDefault();
        setLocation(await getLocationAPI(this.state.location))
        this.urlChange()
    }

    render() {
        const location = getLocation();
        return (
            <div>
                <h2>Viewing Conditions Forecast</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>Location: 
                        <input type="text" onChange={this.locationChange}></input>
                    </label>
                    <button>Set</button><br/>
                    <img src={`https://www.7timer.info/bin/astro.php?lon=${location.longitude}&lat=${location.latitude}&ac=0&lang=en&unit=british&output=internal&tzshift=0`} alt='viewing conditions' />
                </form>
            </div>
        )
    }
} 