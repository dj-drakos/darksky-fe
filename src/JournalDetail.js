import React, { Component } from 'react';
import request from 'superagent';
const backendURL = 'https://guarded-thicket-69575.herokuapp.com';
export default class JournalDetail extends Component {

    state = {
        journalEntry: [],
    }

    fetchEntry = async (id, token) => {
        const { body } = await request
            .get(`${backendURL}/api/journals/${id}`)
            .set('Authorization', token);
        return body;
    }

    updateEntry = async (id, data, token) => {
        const { body } = await request
            .put(`${backendURL}/api/journals/${id}`)
            .send(data)
            .set('Authorization', token)
        return body;
    }

    deleteEntry = async (id, token) => {
        const { body } = await request
            .delete(`${backendURL}/api/journals/${id}`)
            .set('Authorization', token)
        return body
    }

    componentDidMount = async () => {
        const id = this.props.match.params.entryId;
        const entry = await this.fetchEntry(id, this.props.token)
        this.setState({ journalEntry: entry, formEntry: entry[0].journal_entry })
    }

    handleChange = (e) => {
        this.setState({ formEntry: e.target.value })
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        await this.updateEntry(
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
        this.deleteEntry(this.props.match.params.entryId, this.props.token);
        await this.props.history.push('/journal')
    }

    render() {
        console.log(this.state.journalEntry.length && this.state.journalEntry[0].journal_entry);
        console.log(this.state.journalEntry.length && this.state.formEntry)
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
