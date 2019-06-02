import React, { Component } from 'react'

export default class ListItem extends Component {
    render() {
        return (
            <tr>
                <td>
                    {this.props.product.id}
                </td>
                <td>
                    {this.props.product.dName}
                </td>
                <td>
                    {this.props.product.direction}
                </td>
                <td>
                    {this.props.product.date}
                </td>
                <td>
                    {this.props.product.time}
                </td>
            </tr>
        )
    }
}
