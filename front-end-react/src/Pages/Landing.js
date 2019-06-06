import React, { Component } from 'react'
import Navigation from '../components/Navigation';
import Welcome from '../components/Welcome';
import Footer from '../components/Footer';

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
