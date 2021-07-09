import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <Link to="/about-us">About Us</Link>
                <p>☾ 2021 AstroLocus</p>
            </div>
        )
    }
}
