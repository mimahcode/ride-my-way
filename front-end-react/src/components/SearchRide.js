import React, { Component } from 'react'

export default class SearchRide extends Component {
    render() {
        return (
            <div>
                <div className="searchContainer">
                    <input type="search" placeholder="Your location..." id="yourLocation" />
                    <input type="search" placeholder="Where to?" id="yourDirection" />
                </div>
            </div>
        )
    }
}
