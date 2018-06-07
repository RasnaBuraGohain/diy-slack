import React from 'react'
import Link from 'Components/Link'
import { connect } from 'react-redux'

const HomeView = () => (
    <main>
        <h1>Diy Slack</h1>
        <ul>
            <li>Create Profile</li>
            <li>Connect with Friends or Colleagues</li>
            <li>Chat</li>
            <li>Create Channels</li>
            <li>Stay in Touch</li>
        </ul>
        <p>A simple chat room like SLACK</p>
        <Link to="/login">LOGIN</Link>
    </main>
)

export default connect()(HomeView)