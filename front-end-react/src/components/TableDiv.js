import React, { Component } from 'react'
import Table from './Table';
import Navigation from './Navigation';
import AddOfferBtn from './AddOfferBtn';
import Menu from './Menu';

var taken = {
    '1': { id: 1, dName: 'Basil Ngomoi', direction: 'Africana, Dar es Salaam', date: '03.02.2019', time: '04:30 p.m' },
    '2': { id: 2, dName: 'Angela Njogopa', direction: 'Kariakoo, Dar es Salaam', date: '12.03.2019', time: '09:26 a.m' },
    '3': { id: 3, dName: 'Gladys Xavier', direction: 'Mbweni, Dar es Salaam', date: '17.04.2019', time: '07:48 p.m' },
    '4': { id: 4, dName: 'Maria Desus', direction: 'Lushoto, Tanga', date: '18.04.2019', time: '07:08 a.m' },
    '5': { id: 5, dName: 'Larry Jones', direction: 'Makumbusho, Dar es Salaam', date: '30.04.2019', time: '04:28 p.m' },
    '6': { id: 6, dName: 'Sis Xavier', direction: 'Mbweni, Dar es Salaam', date: '17.04.2019', time: '07:48 p.m' },
    '7': { id: 7, dName: 'Amor Desus', direction: 'Lushoto, Tanga', date: '18.04.2019', time: '07:08 a.m' },
  };

export default class TableDiv extends Component {
    render() {
        return (
            <div>
                <Navigation/>
                <AddOfferBtn/>
                <Menu/>
                <Table productsT={taken} id="tableT" showTableT={this.showTablesT}/>
            </div>
        )
    }
}
