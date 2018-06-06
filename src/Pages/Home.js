import React from 'react'
import Link from 'Components/Link'

const WelcomeView = () => (
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
        <Link to="/login">Login</Link>
    </main>
)

export default WelcomeView