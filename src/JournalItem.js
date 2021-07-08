import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class JournalItem extends Component {

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
