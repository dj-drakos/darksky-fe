import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class JournalCard extends Component {

    render() {
        return (
                <Link className="journal-item" to={`/journal/${this.props.item.id}`}>

                    <div>
                        <img alt="journal pic" src={this.props.item.image_url} />
                        <h4>
                            {this.props.item.date}
                        </h4>
                    </div>

                    <article>
                        <h2>
                            {this.props.item.englishname}
                        </h2>
                        <p>
                            {this.props.item.journal_entry}
                        </p>
                    </article>
                    
                </Link>
        )
    }
}
