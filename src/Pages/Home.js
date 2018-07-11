import React from 'react'
import { connect } from 'react-redux'
import chat from './chat.svg'
import Footer from './Footer'
import ChannelsList from '../Components/ChannelsList'
import Chat from '../Forms/Chat'
import UsersList from '../Components/UsersList'
import DisconnectButton from '../Components/DisconnectButton'

const Home = () => (
    <div >
        <h1>Welcome to Diy Slack</h1>
        <img src={chat} alt="welcome" width="800" height="170">
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
            <DisconnectButton />
        </div>
    </div>
)

export default connect()(Home)