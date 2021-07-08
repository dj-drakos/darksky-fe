import React, { Component } from 'react'
//import { NavLink } from 'react-router-dom';
import request from 'superagent';
import { getPlanets, getMoons, getOthers, getSolarSystemAPI } from './api-utils.js';
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
        if(e.target.value === "planets") {
           const solarSystemAPI = await getPlanets(1) 
           await this.setState({ bodies: solarSystemAPI.bodies, pageNumber: 1})
        } 
        if(e.target.value === "moons") {
            const solarSystemAPI = await getMoons(1) 
            await this.setState({ bodies: solarSystemAPI.bodies, pageNumber: 1})
         } 
         if(e.target.value === "other") {
            const solarSystemAPI = await getOthers(1) 
            await this.setState({ bodies: solarSystemAPI.bodies, pageNumber: 1})
         } 
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

        console.log(this.state.bodies);
        return (
            <div>
                <h1>Astro List</h1>

                <div className="search-menu">
                    <label>
                        Dark Sky Objects
                        <select onChange={this.handleCategorySelection}>
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
