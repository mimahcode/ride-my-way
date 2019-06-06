import React, { Component } from 'react'
import AddOfferBtn from '../components/AddOfferBtn';
import Menu from '../components/Menu';

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      changeT: true,
    }
  }
  render() {

    return (
      <div >
        <AddOfferBtn />
        <Menu />
      </div>
    )
  }
}
