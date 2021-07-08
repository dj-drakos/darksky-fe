import React, { Component } from 'react';
import request from 'superagent';
const backendURL = 'https://guarded-thicket-69575.herokuapp.com/api/journals';
export default class JournalDetail extends Component {

    state = {
        journalEntry: [],
    }

    fetchEntry = async (id, token) => {
        const { body } = await request
            .get(`${backendURL}/${id}`)
            .set('Authorization', token);
        return body;
    }

    // updateEntry = async (id, data, token) => {
    //     const { body } = await request
    //         .put(`${backendURL}/${id}`)
    //         .send(data)
    //         .set('Authorization', token)
    //     return body;
    // }

    componentDidMount = async () => {
        const id = this.props.match.params.entryId;
        const entry = await this.fetchEntry(id, this.props.token)
        this.setState({ journalEntry: entry, formEntry: entry[0].journal_entry })
    }

    handleChange = (e) => {
        this.setState({ formEntry: e.target.value })
    }

    // handleSubmit = async (e) => {
    //     e.preventDefault();
    //     await this.updateEntry(
    //         this.props.match.params.entryId, 
    //         {
    //             journal_entry: this.state.journalEntry[0].journal_entry,
    //             englishname: this.state.journalEntry[0].englishname,
    //             date: this.state.journalEntry[0].date,
    //             image_url: this.state.journalEntry[0].image_url
    //         },
    //         this.props.token
    //         )
    // }

    render() {
        console.log(this.state.journalEntry[0]);
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    {
                        this.state.journalEntry.length && <textarea onChange={this.handleChange} value={this.state.formEntry}></textarea>
                    }
                </form>
            </div>
        )
    }
}
