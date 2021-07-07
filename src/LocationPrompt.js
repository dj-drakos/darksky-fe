import React from 'react'
import { getLocationAPI } from './fetch-utils'
import { setLocation, getLocation } from './LocalStorage'

export default class LocationPrompt extends React.Component {
    state = {
        location: ''
    }

    locationChange = e => {
        this.setState({ location: e.target.value })
    }

    handleSubmit = async e => {
        // e.preventDefault();
        setLocation(await getLocationAPI(this.state.location))
    }
    render() {
        const location = getLocation();
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Location: <input type="text" onChange={this.locationChange}></input></label>
                    <button>Set</button>

                    <img src={`https://www.7timer.info/bin/astro.php?lon=${location.longitude}&lat=${location.latitude}&ac=0&lang=en&unit=british&output=internal&tzshift=0`} alt='yup'></img>
                </form>
            </div>
        )
    }
} //yup