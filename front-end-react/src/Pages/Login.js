import React, { Component } from 'react';
import Header from '../components/Header';
import LoginForm from '../components/LoginForm';

export default class Login extends Component {
    render() {
        return (
            <div class="wrapper">
            <div class="loginDiv">
            <Header />
            <LoginForm />
            </div>
            </div>
        )
    }
}
