import React, { Component } from 'react';
import request from 'superagent';
import JournalList from './JournalList';
import { NavLink } from 'react-router-dom';

const backendURL = 'https://guarded-thicket-69575.herokuapp.com/api/journals';

export default class Journal extends Component {


    state = {
        journals: [],
    }

    fetchJournals = async (token) => {
        const { body } = await request
            .get(backendURL)
            .set('Authorization', token)
        return body;
    }

    componentDidMount = async () => {
        const journals = await this.fetchJournals(this.props.token);
        this.setState({ journals: journals})
    }




    render() {
        console.log(this.state);
        return (
            <div>
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
