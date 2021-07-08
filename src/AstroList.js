import React, { Component } from 'react'
import { getSolarSystemAPI } from './api-utils.js';
import AstroDisplay from './AstroDisplay.js';

export default class AstroList extends Component {

    state = {
        bodies: [],
        wishlist: [],
        search: '',
        pageNumber: 1,
        filter: 'all'
    }

    componentDidMount = async () => {
        const solarSystemAPI = await getSolarSystemAPI(this.state.pageNumber, this.state.filter, this.state.search);
        this.setState({ bodies: solarSystemAPI });
    }

    handleCategorySelection = async (e) => {
        await this.setState({ filter: e.target.value, pageNumber: 1})
        const solarSystemAPI = await getSolarSystemAPI(this.state.pageNumber, this.state.filter, this.state.search);
        this.setState({ bodies: solarSystemAPI });
    }

    handleNextPage = async (e) => {
        await this.setState({pageNumber: this.state.pageNumber + 1});
        const solarSystemAPI = await getSolarSystemAPI(this.state.pageNumber, this.state.filter, this.state.search);
        this.setState({ bodies: solarSystemAPI });
    }

    handlePreviousPage = async (e) => {
        await this.setState({pageNumber: this.state.pageNumber - 1});
        const solarSystemAPI = await getSolarSystemAPI(this.state.pageNumber, this.state.filter, this.state.search);
        this.setState({ bodies: solarSystemAPI });
    }

    handleSearchChange = (e) => {
        this.setState({ search: e.target.value });
    }

    doSearch = async () => {
        const solarSystemAPI = await getSolarSystemAPI(this.state.pageNumber, this.state.filter, this.state.search);
        this.setState({ bodies: solarSystemAPI })
    }

    render(){

        console.log(this.state.search);
        return (
            <div>
                <h1>Astro List</h1>

                <div className="search-menu">
                    <label>
                        Dark Sky Objects
                        <select onChange={this.handleCategorySelection}>
                            <option value="all">Select Type</option>
                            <option value="planets">Planets</option>
                            <option value="moons">Moons</option>
                            <option value="other">Other</option>
                        </select>
                    </label>
                    <input placeholder= "Search Objects by Name" onChange={this.handleSearchChange}>
                    </input>
                    <button onClick={this.doSearch}>Search</button>
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
