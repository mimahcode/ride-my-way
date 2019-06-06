import React, { Component } from 'react'
import user1 from '../Images/user1.png';
import ToggleBtn from './ToggleBtn';
import { NavLink } from 'react-router-dom';

export default class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            animate1: false,
            // isHidden: false,
        }
        this.showSideBar = this.showSideBar.bind(this);
        this.showTableT = this.showTableT.bind(this);
        this.showTableG = this.showTableG.bind(this);
    }
    showSideBar(e) {
        this.setState((prevState) => {
            return {
                animate1: !prevState.animate1
            }
        });
    }
    showTableT(e,changeT){
        this.props.showTableT(e,changeT);
    }
    showTableG(e,changeG){
        this.props.showTableG(e,changeG);
    }
    render() {
        const animationClasses = (this.state.animate1 ? 'active' : ' ');
        return (
            <div id="sidebar" className={`sidebar ${animationClasses}`} >
                <ToggleBtn showSideBar={this.showSideBar} />
                <div id="profilenav">
                    <ul>
                        <li>
                            <a href="profile.html"><img src={user1} id="profImage" alt="profile pic" /></a><br />
                            <label id="username">John Doe</label><br />
                            <label id="ride">Rides</label>
                            <div>
                                <div id="taken">
                                    <label>Taken</label>
                                    <label className="num">5</label>
                                </div>
                                <div id="given">
                                    <label>Given</label>
                                    <label className="num">7</label>
                                </div>
                            </div>
                        </li>
                        <li><NavLink to='/AvailableRides'>Available rides</NavLink></li>
                        <li> <NavLink to='/TableGDiv'>View Rides given</NavLink></li>
                        <li><NavLink to='/TableDiv'>View Rides taken</NavLink> </li>
                        <li><a href="requests.html">Requests</a></li>
                    </ul>
                </div>
            </div>
            
        )
    }
}
