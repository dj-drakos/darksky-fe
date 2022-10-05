import React, { Component } from 'react'
import { getSolarSystemAPI } from '../utils/api-utils';
import AstroList from './AstroList';

export default class AstroDisplay extends Component {

    state = {
        bodies: [],
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

    handleClick = async () => {
        const solarSystemAPI = await getSolarSystemAPI(this.state.pageNumber, this.state.filter, this.state.search);
        this.setState({ bodies: solarSystemAPI })
    }

    render(){
        return (
            <div className='main'>

                <h1>Dark Sky Objects</h1>
                <div className="search-menu">
                    <label>
                        Filter by Category:
                        <select onChange={this.handleCategorySelection}>
                            <option value="all">Select Type</option>
                            <option value="planets">Planets</option>
                            <option value="moons">Moons</option>
                            <option value="other">Other</option>
                        </select>
                    </label>
                    <div>
                        <input placeholder= "Object Name" onChange={this.handleSearchChange}>
                        </input>
                        <button onClick={this.handleClick}>Search</button>
                    </div>
                </div>

                <AstroList token={this.props.token} list={this.state.bodies} />

                <div className='buttons'>

                    {this.state.pageNumber !== 1 && 
                    <button className='prev-button' onClick={this.handlePreviousPage}>
                        Prev Page
                    </button>
                    }

                    {
                    this.state.bodies.length === 20 &&
                    <button className='next-button' onClick={this.handleNextPage}>
                        Next Page 
                    </button>
                    }

                </div>
                
            </div>
        )
    }
}