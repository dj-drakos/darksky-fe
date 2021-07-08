import React, { Component } from 'react'
import { getWishlist } from './fetch-utils.js';

export default class Wishlist extends Component {

    state = {
        wishlist: []
    }

    componentDidMount = async () => {
        const data = await getWishlist(this.props.token);
        this.setState({ wishlist: data })
    }
    render() {
    console.log(this.state.wishlist);
        return (
            <div>
                <h1>Wishlist</h1>
                <div>
                    {
                        this.state.wishlist !== [] ? 
                            this.state.wishlist.map(item => 
                                <div>
                                    <h2>{item.englishname}</h2>
                                    <button>Make a Journal</button>
                                </div>
                            )
                            : <div></div>
                    }
                </div>
            </div>
        )
    }
}
