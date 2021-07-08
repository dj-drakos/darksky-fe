import React, { Component } from 'react';
import request from 'superagent';
const backendURL = 'https://guarded-thicket-69575.herokuapp.com';

export default class CreateJournal extends Component {
    createDate = () => {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        let today = new Date();
        const date = today.toLocaleDateString('en-US', options);
        return date;
    }

    state = {
        journal_entry: 'Log your notes',
        englishname: 'Astro-Body',
        date: this.createDate(),
        image_url: 'https://www.astronomytrek.com/wp-content/uploads/2010/01/milky-way-galaxy.jpg',
    }


    addJournalEntry = async (entryData, token) => {
        const { body } = await request
            .post(`${backendURL}/api/journals`)
            .send(entryData)
            .set('Authorization', token)
        return body;
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        await this.addJournalEntry({
            journal_entry: this.state.journal_entry,
            englishname: this.state.englishname,
            date: this.createDate(),
            image_url: this.state.image_url
        }, this.props.token)

        this.props.history.push('/journal')
    }

    handleTextChange = async (e) => {
        e.preventDefault();
        this.setState({ journal_entry: e.target.value })
    }

    handleInputChange = async (e) => {
        e.preventDefault();
        this.setState({ image_url: e.target.value })
    }

    render() {
        console.log(this.state);
        return (
            <div className="main">
                <form onSubmit={this.handleSubmit}>
                    <textarea placeholder="observe anything interesting?" onChange={this.handleTextChange} >
                    </textarea>
                    <label>
                        <input onChange={this.handleInputChange} type="url" />
                    </label>
                    <button>
                        Done
                    </button>
                </form>
            </div>
        )
    }
}
