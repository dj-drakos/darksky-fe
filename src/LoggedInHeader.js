import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <NavLink to="/main">Home</NavLink>
                <NavLink to="/astro-list">Search</NavLink>
                <NavLink to="/wishlist">Wishlist</NavLink>
                <NavLink to="/journal">Journal</NavLink>
                <NavLink to="/" onClick={this.props.logout}>Log Out</NavLink>
            </div>
        )
    }
}
