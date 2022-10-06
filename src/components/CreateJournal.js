import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { addEntry } from '../utils/server-utils';

export default function CreateJournal({token}) {
    const createDate = () => {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        let today = new Date();
        const date = today.toLocaleDateString('en-US', options);
        return date;
    }
    const location = useLocation()
    const navigate = useNavigate()

    const [state, setState] = useState({
            journal_entry: 'Log your notes',
            englishname: location.state?.name || 'Unidentified object',
            date: createDate(),
            image_url: 'https://www.astronomytrek.com/wp-content/uploads/2010/01/milky-way-galaxy.jpg',
        })

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addEntry({
            journal_entry: state.journal_entry,
            englishname: state.englishname,
            date: createDate(),
            image_url: state.image_url
        }, token)
        navigate('../journal')
    }

    const handleTextChange = (e) => {
        e.preventDefault();
        setState(state =>({ ...state, journal_entry: e.target.value }))
    }

    const handleImageInputChange = (e) => {
        e.preventDefault();
        setState(state => ({...state, image_url: e.target.value }))
    }

    return (
        <div className="main">
            <h1>Create Journal</h1>
            <form className='journal-entry' onSubmit={handleSubmit}>
                <h2>{state.englishname}</h2>
                <textarea placeholder="observe anything interesting?" onChange={handleTextChange} ></textarea>
                <span className='journal-image'>
                    <label>
                        <input onChange={handleImageInputChange} type="url" placeholder="image url"/>
                    </label>
                    <button>Done</button>
                </span>
            </form>
        </div>
    )
}
