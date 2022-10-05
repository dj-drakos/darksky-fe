import React, { Component } from 'react';
import JournalCard from './JournalCard';
import { fetchJournals } from '../utils/fetch-utils';

export default class Journal extends Component {


    state = {
        journals: [],
    }

    componentDidMount = async () => {
        const journals = await fetchJournals(this.props.token);
        this.setState({ journals: journals })
    }

    render() {
        return (
            <div className="main">
                <h1>Journals</h1>
                <main>
                    {this.state.journals.map(item => <JournalCard key={item.id} item={item} />)}
                </main>
            </div>
        )
    }
}
