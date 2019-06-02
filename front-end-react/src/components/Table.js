import React, { Component } from 'react'
import ListItem from './ListItem';
import ListHeader from './ListHeader';
import MainHeader from './MainHeader';

export default class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            animate1: false,
        }
    }
    render() {
        let productsArray = Object.keys(this.props.products).map((pid) => this.props.products[pid])
        let rows = productsArray.map((product) => {
            return (
                <ListItem product={product} keys={product.id} />
            )
        })
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <MainHeader />
                        </tr>
                        <tr>
                            <ListHeader column='S/N' />
                            <ListHeader column='Driver Name' />
                            <ListHeader column='Trip Direction' />
                            <ListHeader column='Date' />
                            <ListHeader column='Time' />
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
            </div>
        )
    }
}
