import React, { Component } from 'react'

export default class ListHeader extends Component {
    render() {
        return (
            <th>
                {this.props.column}
            </th>
        )
    }
}
