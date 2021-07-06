import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Conditions from './Conditions';
export default class Header extends Component {
    render() {
        return (
            <div>
                <NavLink to="/main">Astromapi</NavLink>
                <NavLink to="/">Login</NavLink>
                <NavLink to="/signup">Sign Up</NavLink>
                <NavLink to="/astro-list">Search</NavLink>
                <NavLink to="/journal-list">Journal</NavLink>
                <Conditions />
            </div>
        )
    }
}
