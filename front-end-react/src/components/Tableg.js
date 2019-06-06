import React, { Component } from 'react'
import ListItem from './ListItem';
import ListHeader from './ListHeader';
import MainHeader from './MainHeader';

export default class Tableg extends Component {
    constructor(props) {
        super(props);
        this.state = {
            animate1: false,
            title: 'List of Rides Given',
            changeTable: this.props.changeTable,
        }
        // this.showTable = this.showTable.bind(this);
    }
    // showTable(e) {
    //     this.props.showTables(e);
    // }
    render() {
        const style = this.state.changeTable ? {display:'none'} : {};
        let productsGArray = Object.keys(this.props.productsG).map((pid) => this.props.productsG[pid])
        let rows = productsGArray.map((product) => {
            return (
                <ListItem product={product} keys={product.id} />
            )
        })
        return (
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
        )
    }
}
