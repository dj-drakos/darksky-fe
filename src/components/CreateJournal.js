import React, { Component } from 'react';
import { getName } from '../utils/local-storage-utils';
import { addJournalEntry } from '../utils/fetch-utils';

export default class CreateJournal extends Component {
    createDate = () => {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        let today = new Date();
        const date = today.toLocaleDateString('en-US', options);
        return date;
    }

    state = {
        journal_entry: 'Log your notes',
        englishname: '',
        date: this.createDate(),
        image_url: 'https://www.astronomytrek.com/wp-content/uploads/2010/01/milky-way-galaxy.jpg',
    }


    componentDidMount = async () => {
        const name = await getName()
        this.setState({ englishname: name })
    }


    handleSubmit = async (e) => {
        e.preventDefault();
        await addJournalEntry({
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

    handleImageInputChange = async (e) => {
        e.preventDefault();
        this.setState({ image_url: e.target.value })
    }

    render() {
        return (
            <div className="main">

                <h1>Create Journal</h1>

                <form className='journal-entry' onSubmit={this.handleSubmit}>
                    <h2>{this.state.englishname}</h2>
                    <textarea placeholder="observe anything interesting?" onChange={this.handleTextChange} ></textarea>
                    <span className='journal-image'>
                        <label>
                            <input onChange={this.handleImageInputChange} type="url" placeholder="image url"/>
                        </label>
                        <button>Done</button>
                    </span>
                </form>

            </div>
        )
    }
}
