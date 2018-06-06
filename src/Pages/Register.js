import React from 'react'
import { connect } from 'react-redux'
import { push } from 'redux-first-routing'

import RegisterForm from 'Components/RegisterForm'

const Register = ({ dispatch }) => (
    <main>
        <h1>Register</h1>
        <p>Welcome to the Diy Slack</p>
        <ul>
            <li>Create Profile</li>
            <li>Connect with Friends or Colleagues</li>
            <li>Chat</li>
            <li>Create Channels</li>
            <li>Stay in Touch</li>
        </ul>
        <p>A simple chat room like SLACK</p>

        <RegisterForm onRegister={() => dispatch(push("/profile"))} />
    </main>
)

export default connect()(Register)