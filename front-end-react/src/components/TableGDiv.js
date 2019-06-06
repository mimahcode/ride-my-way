import React, { Component } from 'react'
import Tableg from './Tableg';
import Navigation from './Navigation';
import AddOfferBtn from './AddOfferBtn';
import Menu from './Menu';

var given = {
    '1': { id: 1, dName: 'mimier nandi', direction: 'Africana, Dar es Salaam', date: '03.02.2019', time: '04:30 p.m' },
    '2': { id: 2, dName: 'Bongela Njogopa', direction: 'Kariakoo, Dar es Salaam', date: '12.03.2019', time: '09:26 a.m' },
    '3': { id: 3, dName: 'Sis Xavier', direction: 'Mbweni, Dar es Salaam', date: '17.04.2019', time: '07:48 p.m' },
    '4': { id: 4, dName: 'Amor Desus', direction: 'Lushoto, Tanga', date: '18.04.2019', time: '07:08 a.m' },
    '5': { id: 5, dName: 'Tamy Jones', direction: 'Makumbusho, Dar es Salaam', date: '30.04.2019', time: '04:28 p.m' }
  };

export default class TableDiv extends Component {
    render() {
        return (
            <div>
                <Navigation/>
                <AddOfferBtn/>
                <Menu/>
                <Tableg productsG={given} id="tableG" showTableG={this.showTablesG}/>
            </div>
        )
    }
}
