import React, { Component } from 'react'
//import { NavLink } from 'react-router-dom';
import request from 'superagent';
import { mungeAsteroids, mungeMoons, mungePlanets } from './munge.js';
import { getSolarSystemAPI } from './fetch-utils.js'
import AstroDisplay from './AstroDisplay.js';

export default class AstroList extends Component {

    state = {
        bodies: [],
        wishlist: [],
        search: '',
        pageNumber: 1,
    }

    componentDidMount = async () => {
        const solarSystemAPI = await getSolarSystemAPI(this.state.pageNumber);
        this.setState({ bodies: solarSystemAPI.bodies });
    }

    handleCategorySelection = async (e) => {
        await this.setState({ bodies: e.target.value });
    }

    handleNextPage = async (e) => {
        
        await this.setState({pageNumber: this.state.pageNumber + 1});
        const solarSystemAPI = await getSolarSystemAPI(this.state.pageNumber);
        this.setState({ bodies: solarSystemAPI.bodies });
    }
  
    handlePreviousPage = async (e) => {
        await this.setState({pageNumber: this.state.pageNumber - 1});
        const solarSystemAPI = await getSolarSystemAPI(this.state.pageNumber);
        this.setState({ bodies: solarSystemAPI.bodies });
  }


    render() {

        console.log(this.state.bodies.length);
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

                <AstroDisplay
                display={this.state.bodies}
                />

                {this.state.pageNumber !== 1 && 
                <button onClick={this.handlePreviousPage}>
                    Previous
                </button>
                }
               
               {
                this.state.bodies.length === 20 &&
                <button onClick={this.handleNextPage}>
                    Next Page 
                </button>
                }
                
            </div>
        )
    }
}
