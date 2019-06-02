import React, { Component } from 'react'
import AddOfferBtn from './AddOfferBtn';
import Menu from './Menu';
import SearchRide from './SearchRide';
import AvailableList from './AvailableList';
export default class AvailableRides extends Component {
    render() {
        return (
            <div>
                <AddOfferBtn />
                <Menu />
                <SearchRide />
                <AvailableList />
            </div>
        )
    }
}
