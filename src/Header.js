import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <NavLink to="/main">AstroLocus</NavLink>
                <NavLink to="/signup">Sign Up</NavLink>
            </div>
        )
    }
}
