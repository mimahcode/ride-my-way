import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export default class LoginForm extends Component {
    render() {
        return (
            <form class="loginForm">
                <label>Email</label>
                <input class="input" id="email" type="email" placeholder="Enter email . . ." required />
                <label>Password</label>
                <input class="input" id="password" type="password" placeholder="Password" required />
                <NavLink id="submit" to='/Profile'>Login</NavLink>
                <NavLink to='/Signup'>Not registered? Sign Up here!</NavLink>
            </form>
        )
    }
}
