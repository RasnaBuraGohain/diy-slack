import React from 'react'
import { connect } from 'react-redux'
//import Websocket from '../Websocket'
import chat from './chat.svg'
import Footer from './Footer'
import ChannelsList from '../Components/ChannelsList';
import Chat from '../Forms/Chat';
import UsersList from '../Components/UsersList';
//import Users from './Users'

const HomeView = () => (
    <div >
        <h1>Welcome to Diy Slack</h1>
        <img src={chat} alt="welcome" width="800" height="200">
        </img>
        <br />
        <div >
            <Chat />
            <div className="sidebar">
                <label>Online:</label>
                <UsersList />
            </div>
            <ChannelsList />
            <Footer />
        </div>
    </div>
)

export default connect()(HomeView)