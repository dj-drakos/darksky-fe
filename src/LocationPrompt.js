import React from 'react'
import { getLocationAPI } from './fetch-utils'
import { setLocation } from './LocalStorage'

export default class LocationPrompt extends React.Component {
    state = {
        location: ''
    }

    locationChange = e => {
        this.setState({ location: e.target.value })
    }

    handleSubmit = async e => {
        e.preventDefault();
        setLocation(await getLocationAPI(this.state.location))
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Location: <input type="text" onChange={this.locationChange}></input></label>
                    <button>Set</button>
                </form>
            </div>
        )
    }
}