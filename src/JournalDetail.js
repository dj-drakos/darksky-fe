import React, { Component } from 'react';
import request from 'superagent';
const backendURL = 'https://guarded-thicket-69575.herokuapp.com/api/journals';
export default class JournalDetail extends Component {

    state = {
        currentEntry: '',
        obj: []
    }

    addJournalEntry = async (entry, token) => {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        let today = new Date();
        const { body } = await request
            .post(`${backendURL}/api/journals`)
            .send({ 
                journal_entry: entry,
                date: today.toLocaleDateString('en-US', options),
                englishname: this.state.obj[0].englishName
            })
            .set('Authorization', token)
        return body;
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        await this.addJournalEntry(this.state.currentEntry, this.props.token)
    }

    render() {
        return (
            <div>
                <form>
                    <textarea>

                    </textarea>
                </form>
            </div>
        )
    }
}
