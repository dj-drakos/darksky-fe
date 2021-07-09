import React, { Component } from 'react'


export default class AboutUs extends Component {
    render() {
        return (
            <div className='main'>
                <h1>About Us</h1>

                <div className='bio-item'>
                        <img className="bio-pic" src="https://media-exp1.licdn.com/dms/image/C5603AQE287gRluCYbA/profile-displayphoto-shrink_400_400/0/1621478870959?e=1631145600&v=beta&t=A1bkeCBGJPhO_ikmcv5avaRxNN-e-LG8DQn97NNW568" alt="DJ Drakos" />
                    <article>
                        <h2>DJ Drakos
                            <a target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/sofianais/"><img className='icon' src='./linkedin.png' alt='LinkedIn' /></a>
                            <a target="_blank" rel='noreferrer' href="https://github.com/sofiatejada"><img className='icon' src='./github.png' alt='Github' />
                            </a>
                        </h2>
                        <p>
                            Insert Bio Here
                        </p>
                    </article>
                </div>

                <div className='bio-item'>
                    <img className="bio-pic" src="https://media-exp1.licdn.com/dms/image/D5635AQHCPhSDFCUp1A/profile-framedphoto-shrink_400_400/0/1623739955189?e=1625878800&v=beta&t=uUUMkjjx_M6K5E9LjB6M5-UMwWCFS0TojCj8Tc-SjrM" alt="Kubisiak" />
                    <article>
                        <h2>Kubisiak
                            <a target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/sofianais/"><img className='icon' src='./linkedin.png' alt='LinkedIn' /></a>
                            <a target="_blank" rel='noreferrer' href="https://github.com/sofiatejada"><img className='icon' src='./github.png' alt='Github' />
                            </a>
                        </h2>
                        <p>
                            Insert Bio Here
                        </p>
                    </article>
                </div>

                <div className='bio-item'>
                        <img className="bio-pic" src="https://media-exp1.licdn.com/dms/image/C4E03AQGlkWEQ4EAexQ/profile-displayphoto-shrink_400_400/0/1620661766468?e=1631145600&v=beta&t=rJPfZMro0k1beU2fxE5-xgH-GiC6tNetet_MVxpKTcE" alt="Sofia Tejada" />
                    <article>
                        <h2>Sofia Tejada 
                        <a target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/sofianais/"><img className='icon' src='./linkedin.png' alt='LinkedIn' /></a>
                        <a target="_blank" rel='noreferrer' href="https://github.com/sofiatejada"><img className='icon' src='./github.png' alt='Github' /></a>
                        </h2>
                        <p>
                        I'm a Full-stack Developer based in the San Francisco Bay Area. I love to code because it's an exciting and challenging field where I can see myself being an asset to my community and where I know I will feel fulfilled. When I'm not coding, you can find me on Steam, learning to be a better photographer, or reading novels. My favorite languages are Korean and Spanish!
                        </p>
                        <p>
                        </p>
                    </article>
                </div>

                <div className='bio-item'>
                        <img className="bio-pic" src="https://media-exp1.licdn.com/dms/image/C4E03AQG9gSEPQJjNYg/profile-displayphoto-shrink_400_400/0/1620148404124?e=1631145600&v=beta&t=QvyV9IKqEmGUY9YTxmcBmfyPzVNYudBEVVbMN9sAWFQ" alt="Isaac Ewing" />
                    <article>
                        <h2>Isaac Ewing
                            <a target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/sofianais/"><img className='icon' src='./linkedin.png' alt='LinkedIn' /></a>
                            <a target="_blank" rel='noreferrer' href="https://github.com/sofiatejada"><img className='icon' src='./github.png' alt='Github' />
                            </a>
                        </h2>
                        <p>
                            Insert Bio Here
                        </p>
                    </article>
                </div>
                
                <div className='bio-item'>
                        <img className="bio-pic" src="https://media-exp1.licdn.com/dms/image/C4E03AQHTL9yonVG_eA/profile-displayphoto-shrink_400_400/0/1620147576714?e=1631145600&v=beta&t=6TXXJUgjfP3bLZf1vbDi_1_BPyYzwx7axotUvhqRWiQ" alt="Ben Francka" />
                    <article>
                        <h2>Ben Francka
                            <a target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/sofianais/"><img className='icon' src='./linkedin.png' alt='LinkedIn' /></a>
                            <a target="_blank" rel='noreferrer' href="https://github.com/sofiatejada"><img className='icon' src='./github.png' alt='Github' />
                            </a>
                        </h2>
                        <p>
                        I'm a software developer with a knack for working with teams and solving problems. Considering I grew up on a cattle farm working with my cousins, and have spent over a decade in professional kitchens as a chef working closely with teams of all backgrounds, I feel like I am adept at meeting teammates where they are with respect and enough motivation to keep everyone focused on the task at hand. 
                        </p>
                    </article>
                </div>

                <div className='credits'>
                    <h2>
                        Credits
                    </h2>
                    <p>
                        <a href="https://api.nasa.gov">
                        Nasa Astronomy Picture of the Day</a> was used to obtain a live updated astronomy picture and video for our main page.
                    </p>
                    <p>
                        <a href="https:www.7timer.info/doc.php?lang=en#astro">7timer API
                            </a> was used to obtain observational weather data: cloud cover, astronomical transparency, and air flow distortion
                    </p>
                    <p>
                        <a href="https://locationiq.com">
                        Location IQ API
                        </a> was used to obtain location information for use in the searching of weather data in the 7timer api.
                    </p>
                    <p>
                        <a href="https://api.le-systeme-solaire.net/">
                        Systeme Solaire API
                        </a> was used to access data pertaining to astronomical bodies including name, type, gravity, date discovered.
                    </p>
                </div>

            </div>
        )
    }
}
