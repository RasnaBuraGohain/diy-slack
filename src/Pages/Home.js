import React from 'react'
import { connect } from 'react-redux'
import Websocket from '../Websocket'
import chat from './chat.svg'
import Footer from './Footer'
import ChannelForm from '../Forms/ChannelForm';
//import Users from './Users'

const HomeView = () => (
    <div class="home-page">
        <h1>Welcome to Diy Slack</h1>
        <img src={chat} alt="welcome" width="800" height="200">
        </img>
        <br />
        <div >
            <Websocket />
            <div className='leftbar'>
                <ChannelForm />
            </div>
            <Footer />
        </div>
    </div>
)

export default connect()(HomeView)