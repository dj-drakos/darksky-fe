import { useEffect, useState } from 'react'
import { getLocationAPI } from '../utils/api-utils'
import { setLocalStorageLocation, getLocalStorageLocation } from '../utils/local-storage-utils'

const sevenTimerURL = process.env.REACT_APP_7TIMER_URL

export default function LocationPrompt() {
    const [{name, latitude, longitude}, setState] = useState({
        name: '',
        latitude: 0,
        longitude: 0,
        })

    useEffect(() => {
        const localStorageLocation = getLocalStorageLocation()
        setState(localStorageLocation)
    }, [])

    const locationChange = e => {
        setState((state) => ({
            ...state,
            name: e.target.value
        }))
    }
    
    const handleSubmit = async e => {
        e.preventDefault();
        const newLocation = await getLocationAPI(name)
        setLocalStorageLocation(newLocation)
        setState(newLocation)
    }

    return (
        <div className="flex-element">
            <h2>Viewing Conditions Forecast</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        <input type="text" placeholder='location' value={name} onChange={locationChange} />
                    </label>
                    <button>Set</button>
                    <br/>
                </div>
                <img src={`${sevenTimerURL}?lon=${longitude}&lat=${latitude}&ac=0&lang=en&unit=british&output=internal&tzshift=0`} alt='viewing conditions' />
            </form>
            <div className='weather-key'>
                <h4>Key:</h4>
                <p>
                    <span>clear</span> 
                    <img src='./about_astro_cloud.png' alt='cloud cover' /> cloudy
                </p>
                <p>
                    <span>clear</span>
                    <img src='./about_astro_seeing.png' alt='astronomical seeing' />turbulent
                </p>
                <p>
                    <span>clear</span>
                    <img src='./about_astro_transparency.png' alt='atmospheric transparency' />hazy
                    </p>
                <p>
                    <span>stable</span>
                    <img src='./about_astro_unstable.png' alt='astronomical instability' />unstable
                </p>
                <p>
                    <span>dry</span> 
                    <img src='./about_astro_rh.png' alt='relative humidity' />humid
                </p>
                <p>
                    <span>calm</span>
                    <img src='./about_astro_wind.png' alt='wind' />strong
                </p>
                <p>
                    <span>rain / snow</span>
                    <img src='./about_astro_rainsnow.png' alt='chance rain or snow' />
                </p>
            </div>
        </div>
    )
} 