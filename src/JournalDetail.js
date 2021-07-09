import React, { Component } from 'react';
import request from 'superagent';
import { fetchEntry, updateEntry, deleteEntry } from './fetch-utils.js';
export default class JournalDetail extends Component {

    state = {
        journalEntry: [],
    }

    componentDidMount = async () => {
        const id = this.props.match.params.entryId;
        const entry = await fetchEntry(id, this.props.token)
        this.setState({ journalEntry: entry, formEntry: entry[0].journal_entry })
    }

    handleChange = (e) => {
        this.setState({ formEntry: e.target.value })
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        await updateEntry(
            this.props.match.params.entryId, 
            {
                journal_entry: this.state.formEntry,
                englishname: this.state.journalEntry[0].englishname,
                date: this.state.journalEntry[0].date,
                image_url: this.state.journalEntry[0].image_url
            },
            this.props.token
            )

        this.props.history.push('/journal')
    }

    handleDelete = async () => {
        deleteEntry(this.props.match.params.entryId, this.props.token);
        await this.props.history.push('/journal')
    }

    render() {
        return (
            <div className="main">
                {
                    this.state.journalEntry.length &&
                    <h4>
                        {this.state.journalEntry[0].englishname}
                    </h4>
                }
                {
                    this.state.journalEntry.length && <img src={this.state.journalEntry[0].image_url} alt="astro" />
                }
                <form onSubmit={this.handleSubmit}>
                    {
                        this.state.journalEntry.length && <textarea onChange={this.handleChange} value={this.state.formEntry}></textarea>
                    }
                    <button>
                        Done
                    </button>
                </form>
                    <button onClick={this.handleDelete}>
                        Delete
                    </button>
            </div>
        )
    }
}
