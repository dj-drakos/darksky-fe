import React, { Component } from 'react'

export default class AstroDisplay extends Component {
    render() {
        return (
            <div className="astro-display">
                {this.props.display.map(item => 
                    <>
                    <h2>
                        {item.englishName}
                    </h2>
                    <p>
                        gravity:
                        {item.gravity}
                    </p>
                    <p>
                        date discovered:
                        {item.discoveryDate}
                    </p>
                    <p>
                        Radius in Kilometers:
                        {item.meanRadius}
                    </p>
                    </>
                    )}
                
            </div>
        )
    }
}
