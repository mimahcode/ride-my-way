import React, { Component } from 'react'
import ListItem from './ListItem';
import ListHeader from './ListHeader';
import MainHeader from './MainHeader';

export default class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            animate1: false,
            title: 'List of Rides Taken',
            changeTable1: this.props.changeTable,
        }
        // this.showTable = this.showTable.bind(this);
    }
    // showTable(e) {
    //     this.props.showTables(e);
    // }
    render() {
        const style = this.state.changeTable1 ? { display: 'none' } : {};
        let productsTArray = Object.keys(this.props.productsT).map((pid) => this.props.productsT[pid])
        let rows = productsTArray.map((product) => {
            return (
                <ListItem product={product} keys={product.id} />
            )
        })
        return (
            <div>
                <table style={style}>
                    <thead>
                        <tr>
                            <MainHeader tableTitle={this.state.title} />
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
