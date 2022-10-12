import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { createDate } from '../helpers/formatting-helpers'
import { addEntry } from '../utils/server-utils';

export default function CreateJournal({token}) {
 
    const location = useLocation()
    const navigate = useNavigate()

    const [{date, entry, imageUrl, objectName}, setState] = useState({
            date: createDate(),
            entry: 'Log your notes',
            imageUrl: 'https://www.astronomytrek.com/wp-content/uploads/2010/01/milky-way-galaxy.jpg',
            objectName: location.state?.objectName || 'Unidentified object',
        })

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addEntry({
            entry,
            objectName,
            date,
            imageUrl,
        }, token)
        navigate('../journal')
    }

    const handleChange = (e) => {
        setState(state =>({ ...state, [e.target.name]: e.target.value }))
    }

    return (
        <div className="main">
            <h1>Create Journal Entry</h1>
            <form className='journal-entry' onSubmit={handleSubmit}>
                <h2>{objectName}</h2>
                <h4>{date}</h4>
                <textarea placeholder="observe anything interesting?" name="entry" value={entry} onChange={handleChange} ></textarea>
                <span className='journal-image'>
                    <label>
                        <input type="url" placeholder="image url" name="imageUrl" value={imageUrl} onChange={handleChange} />
                    </label>
                    <button>Done</button>
                </span>
            </form>
        </div>
    )
}
