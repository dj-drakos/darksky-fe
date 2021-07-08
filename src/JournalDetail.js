import React, { Component } from 'react';
// import request from 'superagent';
// const backendURL = 'https://guarded-thicket-69575.herokuapp.com/api/journals';
export default class JournalDetail extends Component {

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <textarea placeholder="see anything interesting?">
                    </textarea>
                    
                </form>
            </div>
        )
    }
}
