import React, { Component } from 'react';
import request from 'superagent';
import JournalList from './JournalList';
import { getToken } from './LocalStorage';

const backendURL = 'https://guarded-thicket-69575.herokuapp.com/api/journals';

export default class Journal extends Component {


    state = {
        journals: [],
    }


    componentDidMount = async () => {
        const token = getToken();
        const journals = await this.fetchJournals(token);
        this.setState({ journals: journals})
    }

    fetchJournals = async (token) => {
        const { body } = await request
            .get(backendURL)
            .set('Authorization', token)
        return body;
    }



    render() {
        console.log(this.props);
        return (
            <div>
                <h1>Journal List</h1>
                <main>
                    {this.state.journals.map(item => <JournalList entry={item} />)}
                </main>
            </div>
        )
    }
}
