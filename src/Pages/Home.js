import React from 'react'
import { connect } from 'react-redux'
import Login from './Login'
import Welcome from './Welcome.svg'

const HomeView = () => (
    <div class="home-page">

        <h1>Welcome to Diy Slack</h1>
        <img src={Welcome} alt="welcome" width="800" height="200">
        </img>
        <br />
        <Login />

    </div>
)

export default connect()(HomeView)