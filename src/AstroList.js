import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import { mungePlanets } from './munge.js';
import { getSolarSystemAPI } from './fetch-utils.js'

export default class AstroList extends Component {

    state = {
        bodies: []
    }

    componentDidMount = async () => {
        const solarSystemAPI = await getSolarSystemAPI();
        this.setState({ bodies: solarSystemAPI.bodies });
    }

    render() {

        console.log(mungePlanets(this.state.bodies));
        return (
            <div>
                <h1>Astro List</h1>
                {/* need inputs for filters
                - controlled input for user:
                - text input for names (hit englishName + aroundPlanet planet)
                - dropdown for planets / moons / other objects
                - submit button
                -reset button

                - button somewhere else to see only favorites

                */}

                <NavLink to="/planets">Planets</NavLink> 
            </div>
        )
    }
}
