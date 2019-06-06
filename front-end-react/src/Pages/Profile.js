import React, { Component } from 'react'
import AddOfferBtn from '../components/AddOfferBtn';
import Menu from '../components/Menu';
import Table from '../components/Table';
import Tableg from '../components/Tableg';

var taken = {
  '1': { id: 1, dName: 'Basil Ngomoi', direction: 'Africana, Dar es Salaam', date: '03.02.2019', time: '04:30 p.m' },
  '2': { id: 2, dName: 'Angela Njogopa', direction: 'Kariakoo, Dar es Salaam', date: '12.03.2019', time: '09:26 a.m' },
  '3': { id: 3, dName: 'Gladys Xavier', direction: 'Mbweni, Dar es Salaam', date: '17.04.2019', time: '07:48 p.m' },
  '4': { id: 4, dName: 'Maria Desus', direction: 'Lushoto, Tanga', date: '18.04.2019', time: '07:08 a.m' },
  '5': { id: 5, dName: 'Larry Jones', direction: 'Makumbusho, Dar es Salaam', date: '30.04.2019', time: '04:28 p.m' },
  '6': { id: 6, dName: 'Sis Xavier', direction: 'Mbweni, Dar es Salaam', date: '17.04.2019', time: '07:48 p.m' },
  '7': { id: 7, dName: 'Amor Desus', direction: 'Lushoto, Tanga', date: '18.04.2019', time: '07:08 a.m' },
};
var given = {
  '1': { id: 1, dName: 'mimier nandi', direction: 'Africana, Dar es Salaam', date: '03.02.2019', time: '04:30 p.m' },
  '2': { id: 2, dName: 'Bongela Njogopa', direction: 'Kariakoo, Dar es Salaam', date: '12.03.2019', time: '09:26 a.m' },
  '3': { id: 3, dName: 'Sis Xavier', direction: 'Mbweni, Dar es Salaam', date: '17.04.2019', time: '07:48 p.m' },
  '4': { id: 4, dName: 'Amor Desus', direction: 'Lushoto, Tanga', date: '18.04.2019', time: '07:08 a.m' },
  '5': { id: 5, dName: 'Tamy Jones', direction: 'Makumbusho, Dar es Salaam', date: '30.04.2019', time: '04:28 p.m' }
};

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      changeT: true,
    }
    this.showTablesG = this.showTablesG.bind(this);
  }
  showTablesG(e) {
    const changes = this.state.changes;
    this.setState({
      changeT: !changes
    });
  }
  showTablesT(e, changes) {
    changes = this.state.changes;
    this.setState({
      changeT: !changes
    });
  }

  render() {

    return (
      <div >
        <AddOfferBtn />
        <Menu showTableG={this.showTablesG} showTableT={this.showTablesT} changeG={this.changes} />
        <Table changeTable={this.state.changeT} productsT={taken} id="tableT" showTableT={this.showTablesT} />
        <Tableg changeTable={this.state.changeT} productsG={given} id="tableG" showTableG={this.showTablesG} />
      </div>
    )
  }
}
