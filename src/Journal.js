import React, { Component } from 'react';
// import request from 'superagent';
import JournalList from './JournalList';
import { NavLink } from 'react-router-dom';
import { fetchJournals } from './fetch-utils';

export default class Journal extends Component {


    state = {
        journals: [],
    }

    componentDidMount = async () => {
        const journals = await fetchJournals(this.props.token);
        this.setState({ journals: journals})
    }

    render() {
        console.log(this.state);
        return (
            <div className="main">
                <h1>Journal List</h1>
                <nav>
                    <NavLink to="/create">
                        New Entry
                    </NavLink>
                </nav>
                <main>
                    {this.state.journals.map(item => <JournalList entry={item} />)}
                </main>
            </div>
        )
    }
}
