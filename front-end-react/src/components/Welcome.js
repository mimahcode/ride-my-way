import React, { Component } from 'react'
import rmw from '../Images/rmw.gif';

export default class Welcome extends Component {
  render() {
    return (
      <div>
        <div id="section">
            <div id="section1">
                <div class="welcomeNote">
                    <h3>ride <span>My </span>way</h3>
                    <p>Get a ride from a friend who is heading your direction with Ride my Way.</p>
                </div>
                <div>
                    <img src={rmw} alt="welcomeImage" id="welcomeImg" />
                </div>
            </div>
        </div>
      </div>
    )
  }
}
