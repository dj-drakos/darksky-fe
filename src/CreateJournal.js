import React, { Component } from 'react';
import { getName } from './LocalStorage';
import { addJournalEntry } from './fetch-utils.js';

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

    handleSubmit = async (e) => {
        e.preventDefault();
        const name = getName()
        await addJournalEntry({
            journal_entry: this.state.journal_entry,
            englishname: name,
            date: this.createDate(),
            image_url: this.state.image_url
        }, this.props.token)

        this.props.history.push('/journal')
    }

    handleTextChange = async (e) => {
        e.preventDefault();
        this.setState({ journal_entry: e.target.value })
    }

    handleImageInputChange = async (e) => {
        e.preventDefault();
        this.setState({ image_url: e.target.value })
    }

    handleTitleInputChange = async (e) => {
        e.preventDefault();
        this.setState({ englishname: e.target.value })
    }

    render() {
        return (
            <div className="main">
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <input placeholder="title" onChange={this.handleTitleInputChange} />
                    </label>
                    <textarea placeholder="observe anything interesting?" onChange={this.handleTextChange} >
                    </textarea>
                    <label>
                        <input onChange={this.handleImageInputChange} type="url" />
                    </label>
                    <button>
                        Done
                    </button>
                </form>
            </div>
        )
    }
}
