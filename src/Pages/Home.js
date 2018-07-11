import React from 'react'
import { connect } from 'react-redux'
import Footer from '../Components/Footer'
import ChannelsList from '../Components/ChannelsList'
import Chat from '../Forms/Chat'
import UsersList from '../Components/UsersList'
import DisconnectButton from '../Components/DisconnectButton'

const Home = () => (
    <div >
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