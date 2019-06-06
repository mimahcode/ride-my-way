import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export default class Navigation extends Component {
  render() {
    return (
      <div>
        <div id="landingnav" >
            <nav class="nav">
                <h3 class="brand">R<span>My</span>W</h3>
                <ul>
                    <li id="home"><a href="#.html">Home</a></li>
                    <li id="abt"><a href="#.html">About</a></li>
                    <li id="contact"><a href="#.html">Contact</a></li>
                    <li ><div id="offerBtn" ><NavLink to='/Login'>Login </NavLink></div></li>
                </ul>
            </nav>
        </div>
      </div>
    )
  }
}
