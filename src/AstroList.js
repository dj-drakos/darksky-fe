import React, { Component } from 'react'
//import { NavLink } from 'react-router-dom';
import { mungePlanets } from './munge.js';
import { getSolarSystemAPI } from './fetch-utils.js'
import AstroDetail from './AstroDetail.js';

export default class AstroList extends Component {

    state = {
        bodies: [],
        planets: [],
        moons: [],
        other: [],

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
                
                <div className="search-menu">
                    <label>
                        Dark Sky Objects
                        <select>
                            <option value="">Select Type</option>
                            <option value="planets">Planets</option>
                            <option value="moons">Moons</option>
                            <option value="other">Other</option>
                        </select>
                    </label>
                    <input placeholder= "Search Objects by Name">
                    </input>
                    <button>Search</button>
                </div>

                <AstroDetail  />
            </div>
        )
    }
}
