import React, { Component } from 'react';
import JournalItem from './JournalItem';

export default class JournalList extends Component {
    render() {
        return (
            <div>
                <JournalItem item={this.props.entry} />
            </div>
        )
    }
}
