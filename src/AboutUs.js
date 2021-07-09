import React, { Component } from 'react'

export default class AboutUs extends Component {
    render() {
        return (
            <div className="main">
                <h1>About Us</h1>
                <div>
                    <h2>DJ Drakos</h2>
                    <p>
                        
                    </p>
                </div>
                <div>
                    <h2>Kubisiak</h2>
                    <p>

                    </p>
                </div>
                <div>
                    <h2>Sofia Tejada</h2>
                    <p>

                    </p>
                </div>
                <div>
                    <h2>Isaac Ewing</h2>
                    <p>

                    </p>
                </div>
                <div>
                    <h2>Ben Francka</h2>
                    <p>

                    </p>
                </div>

                <div>
                    <h2>
                        Credits
                    </h2>
                    <p>
                        <a href="https://sunrise-sunset.org/api">
                        Sunrise-Sunset API</a>
                        was used to obtain sun set, rise, twilight times.
                    </p>
                    <p>
                       <a href="https:www.7timer.info/doc.php?lang=en#astro">7timer API
                           </a> 
                            was used to obtain observational weather data: cloud cover, astronomical transparency, and air flow distortion
                    </p>
                    <p>
                        <a href="https://locationiq.com">
                        Location IQ API
                        </a>
                        was used to obtain location information for use in the searching of weather data in the 7timer api.
                    </p>
                    <p>
                        <a href="https://api.le-systeme-solaire.net/rest/bodies/">
                        Systeme Solaire API
                        </a>
                        was used to access data pertaining to astronomical bodies including name, type, gravity, data discovered.
                    </p>
                </div>
            </div>
        )
    }
}
