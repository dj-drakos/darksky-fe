import React, { Component } from 'react'
import { addToWishlist, getWishlist } from './fetch-utils.js';

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

    render() {
        console.log(this.state.wishlist);
        return (
            <div className="astro-display">
                {this.props.display.map(item => 
                    <div>
                        <h2>
                            { item.englishName === '' ? item.id : item.englishName }
                        </h2>
                        <p>
                            gravity:
                            {item.gravity}
                        </p>
                        <p>
                            date discovered:
                            {item.discoveryDate}
                        </p>
                        <p>
                            Radius in Kilometers:
                            {item.meanRadius}
                        </p>
                        
                        {
                        !this.state.wishlist.find(wish => {
                            const name = item.englishName === '' ? item.id : item.englishName;
                            console.log(wish, name);
                            return name === wish;}) 
                            
                            && 
                            
                            <button onClick={
                            async () => {
                            const name = item.englishName === '' ? item.id : item.englishName;
                            await addToWishlist({ englishname: name }, this.props.token);}
                            }>Add to Wishlist
                            </button>
                        
                        }

                        <button>Make a Journal</button>
                    </div>
                    )}
                
            </div>
        )
    }
}
