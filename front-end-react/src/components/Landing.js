import React, { Component } from 'react'
import Navigation from './Navigation';
import Welcome from './Welcome';
import Footer from './Footer';

export default class Landing extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Welcome />
        <Footer />
      </div>
    )
  }
}
