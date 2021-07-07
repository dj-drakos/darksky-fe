import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import request from 'superagent';

const backendURL = 'https://guarded-thicket-69575.herokuapp.com/api/journals';

export default class JournalItem extends Component {

    fetchJournalEntry = async (id, token) => {
        const { body } = await request
            .get(`${backendURL}/api/journals/${id}`)
            .set('Authorization', token)
        return body;
    }

    render() {
        return (
            <div>
                <Link to={`/journal-detail/${this.props.item.id}`} >
                    <h4>
                        {this.props.item.date}
                        <article>
                            <h6>
                                {this.props.item.englishname}
                            </h6>
                            <p>
                                {this.props.item.journal_entry}
                            </p>
                        </article>
                    </h4>
                </Link>
            </div>
        )
    }
}
