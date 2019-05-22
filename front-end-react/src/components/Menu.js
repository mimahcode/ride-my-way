import React, { Component } from 'react'
import user1 from '../Images/user1.png';
import Table from './Table';

export default class Menu extends Component {
    constructor(){
        super();
        this.state = {
            animate: false,
        }
        this.showSideBar = this.showSideBar.bind(this);
    }
    showSideBar(e){
        this.setState((prevState) => {
            return {animate: !prevState.animate}
        });
    }
    render() {
        let animationClasses = (this.state.animate ? 'active': ' ');
    return (
      <div>
         <div  id="sidebar" className={`sideBar ${animationClasses}`}>
                <div id="toggleBtn" className="toggleBtn" onClick={this.showSideBar}>
                {this.state.toggle}
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div id="profilenav">
                    <ul>
                        <li>
                            <a href="profile.html"><img src={user1} id="profImage" alt="profile pic"/></a><br/>
                            <label id="username">John Doe</label><br/>
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
                        <li><a href="availableRides.html">Available rides</a></li>
                        <li>View Rides given</li>
                        <li>View Rides given</li>
                        <li><a href="requests.html">Requests</a></li>
                    </ul> 
                </div>
                
            </div>
            <Table button={this.state.animate}/>
      </div>
    )
  }
}
