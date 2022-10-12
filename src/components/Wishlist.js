import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { getWishlist, deleteWishlistItem } from '../utils/server-utils';

export default function Wishlist({token}) {
    const [wishlist, setWishlist] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        getWishlist(token)
            .then(res => setWishlist(res))
            .catch(error => console.log(error))
    }, [token])

    const handleCreateJournal = name => {
        navigate('../journal/create', { state: { name }});
    }

    const handleRemoveFromWishlist = async id => {
        await deleteWishlistItem(id, token)
        getWishlist(token)
            .then(res => setWishlist(res))
            .catch(error => console.log(error))
    }

    return (
        <div className='main'>
            <h1>Wishlist</h1>
            <div className='astro-display'>
                {wishlist.length ?
                    wishlist.map(({name, id}) => 
                        <div key={id} className='wish-item'>
                            <h2>{name}</h2>
                            <button 
                                className='wishlist-button' 
                                onClick={() => handleRemoveFromWishlist(id)}>Remove from Wishlist
                            </button>
                            <form onSubmit={() => handleCreateJournal(name)}>
                                <button className='make-journal-button'>Make a Journal</button>
                            </form>
                        </div>
                    )
                : <h2>There are no items in your wishlist.</h2>
                }
            </div>
        </div>
    )

}
