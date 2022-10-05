import React, { useEffect, useState } from 'react'
import { getSolarSystemAPI } from '../utils/api-utils';
import AstroList from './AstroList';

export default function AstroDisplay({token}) {
    const [{bodies, search, pageNumber, filter}, setState] = useState({
        bodies: [],
        filter: 'all',
        pageNumber: 1,
        search: '',
    }) 

    useEffect(() => {
        getSolarSystemAPI(pageNumber, filter, search)
            .then((res) => setState((state) => ({ ...state, bodies: res })))
    }, [filter, pageNumber, search])

    const handleCategorySelection = (e) => {
        setState((state) => ({ ...state, filter: e.target.value, pageNumber: 1 }))
    }

    const handlePageChange = (num) => {
        setState((state) => ({ ...state, pageNumber: pageNumber + num }));
    }

    const handleChange = (e) => {
        setState((state) => ({ ...state, search: e.target.value}))
    }

    return (
        <div className='main'>
            <h1>Dark Sky Objects</h1>
            <div className="search-menu">
                <label>
                    Filter by Category:
                    <select onChange={handleCategorySelection}>
                        <option value="all">Select Type</option>
                        <option value="planets">Planets</option>
                        <option value="moons">Moons</option>
                        <option value="other">Other</option>
                    </select>
                </label>
                <div>
                    <label>Search:</label>
                    <input placeholder="Object Name" value={search} onChange={handleChange}/>
                </div>
            </div>

            <AstroList token={token} list={bodies} />
            <div className='buttons'>
                {pageNumber > 1 && 
                <button className='prev-button' onClick={() => handlePageChange(-1)}>
                    Prev Page
                </button>}

                {bodies.length === 20 &&
                <button className='next-button' onClick={() => handlePageChange(1)}>
                    Next Page 
                </button>}
            </div>
        </div>
    )
}