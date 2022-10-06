import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import AstroCard from './AstroCard.js';
import { addWishlistItem, getWishlist } from '../utils/server-utils.js';
import { setLocalStorageName } from '../utils/local-storage-utils.js';

export default function AstroList({token, list}) {
    const [wishlist, setWishlist] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        getWishlist(token)
        .then(res => {
            const cleanWishlist = res.map(item => item.englishname)
            setWishlist(cleanWishlist)}
            )
        .catch(error => console.error(error))
    }, [token])
    
    const handleCreateJournal = name => {
        setLocalStorageName(name);
        navigate('../create');
    }

    const handleAddToWishlist = async name => {
        await addWishlistItem({ englishname: name }, token);
        setWishlist(wishlist => [...wishlist, name])
    }

    return (
        <div className="astro-display">

            {list.map(item => 
                <AstroCard  
                    key={item.id} 
                    item={item}
                    handleAddToWishlist={!wishlist.includes(item.name) && handleAddToWishlist}
                    handleCreateJournal={handleCreateJournal}
                /> )}
        </div>
    )
}