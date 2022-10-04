import React, { Component } from 'react'
import { addToWishlist, getWishlist } from '../utils/fetch-utils.js';
import { setName } from '../utils/local-storage-utils.js';

export default class AstroDisplay extends Component {
    state = {
        wishlist: []
    }

    componentDidMount = async () => {
        const wishlist = await getWishlist(this.props.token)
        const mungedWishlist = wishlist.map(item => {
            return item.englishname;
        })
        this.setState({ wishlist: mungedWishlist })
    }

    handleCreateJournal = (name) => {
        setName(name);
        this.props.history.push('./create');
    }

    render() {
        return (
            <div className="astro-display">

                {this.props.display.map(item => 
                    <div className="astro-item" key={item.id}>
                        <h2>{ item.englishName === '' ? item.id : item.englishName }</h2>
                        <p>gravity: {item.gravity}</p>
                        <p>date discovered: {item.discoveryDate}</p>
                        <p>radius: {item.meanRadius} KM</p>
                        <div className='buttons'>
                            {
                            !this.state.wishlist.find(wish => 
                                {
                                const name = item.englishName === '' ? item.id : item.englishName;
                                return name === wish;
                                }
                            )

                            && 

                            <button className='add-wishlist-button' onClick={ 
                                async () => { 
                                    const name = item.englishName === '' ? item.id : item.englishName;
                                    await addToWishlist({ englishname: name }, this.props.token);}
                                }>Add to Wishlist
                            </button>
                            }

                            <form onSubmit={() => this.handleCreateJournal(item.englishName === '' ? item.id : item.englishName)}>
                                <button className='make-journal-button'>Make a Journal</button>
                            </form>
                        </div>
                    </div>
                    )}

            </div>
        )
    }
}