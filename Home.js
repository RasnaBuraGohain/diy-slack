import React from 'react'
import { connect } from 'react-redux'
import Websocket from '../Websocket'
import Welcome from './Welcome.svg'
import Footer from './Footer'

const HomeView = () => (
    <div class="home-page">
        <h1>Welcome to Diy Slack</h1>
        <img src={Welcome} alt="welcome" width="800" height="200">
        </img>
        <br />
        <div >
            <Websocket />
            <Footer />
        </div>
    </div>
)

export default connect()(HomeView)