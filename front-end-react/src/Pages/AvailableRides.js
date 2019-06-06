import React, { Component } from 'react'
import AddOfferBtn from '../components/AddOfferBtn';
import Menu from '../components/Menu';
import SearchRide from '../components/SearchRide';
import AvailableList from '../components/AvailableList';
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
