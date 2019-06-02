import React, { Component } from 'react'

export default class ToggleBtn extends Component {
    render() {
        return (
            <div id="toggleBtn" className="toggleBtn" onClick={this.props.showSideBar}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        )
    }
}
