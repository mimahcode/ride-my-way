import React, { Component } from 'react';
import HeaderSignUp from '../components/HeaderSignUp';
import SignUpForm from '../components/SignUpForm';

export default class Signup extends Component {
    render() {
        return (
            <div>
                <div class="wrapper">
                <div class="loginDiv">
                <HeaderSignUp />
                <SignUpForm/>
                </div>
                </div>
            </div>
        )
    }
}
