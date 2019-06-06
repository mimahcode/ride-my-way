import React, { Component } from 'react'
import {NavLink} from 'react-router-dom';

export default class SignUpForm extends Component {
    render() {
        return (
            <form class="loginForm">
                    <label >First Name</label>
                    <input class="input" id="fname" type="text" placeholder="First name"/>
                    <label >Last Name</label>
                    <input class="input" id="lname" type="text" placeholder="Last name"/>
                    <label >Phone</label>
                    <input class="input" type="tel" id="phone" placeholder="Phone number"/> 
                    <label>Email</label>
                    <input class="input" id="email" type="email" placeholder="Enter email . . ."/>
                    <label>Password</label>
                    <input class="input" id="password" type="password" placeholder="Password"/>
                    <label>Confirm password</label>
                    <input class="input" id="copassword" type="password" placeholder="Confirm password"/>
                    <NavLink id="submit" to='/Profile'>SignUp</NavLink>
                    <NavLink to='/Login'>Already a member? Login here!</NavLink>
                </form>
        )
    }
}
