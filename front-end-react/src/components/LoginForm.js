import React, { Component } from 'react'

export default class LoginForm extends Component {
    render() {
        return (
            <form class="loginForm">
                <label>Email</label>
                <input class="input" id="email" type="email" placeholder="Enter email . . ." required />
                <label>Password</label>
                <input class="input" id="password" type="password" placeholder="Password" required />
                <input id="submit" type="submit" value="Login" />
                <a href="signup.html">Not registered? Sign Up here!</a>
            </form>
        )
    }
}
