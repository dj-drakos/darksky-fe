import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { addToWishlist, getWishlist } from '../utils/fetch-utils.js';
import { setName } from '../utils/local-storage-utils.js';

export default function AstroList({token, list}) {
    const [wishlist, setWishlist] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        getWishlist(token)
        .then((res) => {
            setWishlist(res)
        })
        .catch((error) => console.error(error))
    }, [token])
    
    const handleCreateJournal = (name) => {
        setName(name);
        navigate('../create');
    }

    const handleAddToWishlist = async (name) => {
        await addToWishlist({ englishname: name }, token);
        setWishlist((wishlist) => [...wishlist, name])
    }

    return (
        <div className="astro-display">

            {list.map(item => 
                <div className="astro-item" key={item.id}>
                    <h2>{item.name}</h2>
                    <p>gravity: {item.gravity}</p>
                    <p>date discovered: {item.discoveryDate}</p>
                    <p>radius: {item.radius} KM</p>
                    <div className='buttons'>
                        <button 
                            disabled={wishlist.includes(item.name)} 
                            className='add-wishlist-button' 
                            onClick={() => handleAddToWishlist(item.name)}>Add to Wishlist
                        </button>

                        <form onSubmit={() => handleCreateJournal(item.name)}>
                            <button className='make-journal-button'>Make a Journal</button>
                        </form>
                    </div>
                </div>
                )}
        </div>
    )
}