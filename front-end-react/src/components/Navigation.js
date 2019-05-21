import React, { Component } from 'react'

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
                    <li ><div id="offerBtn"><a href="login.html">Login</a></div></li>
                </ul>
            </nav>
        </div>
      </div>
    )
  }
}
