import React, { Component } from 'react';
import JournalList from './JournalList';
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
        return (
            <div className="main">
                <h1>Journals</h1>
                <main>
                    {this.state.journals.map(item => <JournalList entry={item} />)}
                </main>
            </div>
        )
    }
}
