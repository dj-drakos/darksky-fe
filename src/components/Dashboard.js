import LocationPrompt from './LocationPrompt';
import Apod from './Apod';

export default function Dashboard() {
    return (
        <div className='main'>
            <h1>Greetings Earthling</h1>
            <div className='flex'>
                <LocationPrompt />
                <Apod />
            </div>
        </div>
    )
}
