import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class JournalItem extends Component {

    render() {
        return (
            <div>
                <Link to={`/journal-detail/${this.props.item.id}`} >
                    <img alt="milky way galaxy" src={this.props.item.image_url} />
                    <h4>
                        {this.props.item.date}
                    </h4>
                </Link>
                <article>
                    <h6>
                        {this.props.item.englishname}
                    </h6>
                    <p>
                        {this.props.item.journal_entry}
                    </p>
                </article>
            </div>
        )
    }
}
