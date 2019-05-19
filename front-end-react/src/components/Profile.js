import React, { Component } from 'react'
import Navigation from './Navigation';
import AddOfferBtn from './AddOfferBtn';
import Menu from './Menu';
import Table from './Table';

export default class Profile extends Component {
  render() {
    return (
      <div>
          <Navigation />
          <AddOfferBtn />
          <Menu />
          <Table />
        
      </div>
    )
  }
}
