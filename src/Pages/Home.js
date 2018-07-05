import React from 'react'
import { connect } from 'react-redux'
//import Websocket from '../Websocket'
import chat from './chat.svg'
import Footer from './Footer'
import ChannelsList from '../Components/ChannelsList';
import Chat from './Chat';
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
            <UsersList />
            <ChannelsList />
            <Footer />
        </div>
    </div>
)

export default connect()(HomeView)