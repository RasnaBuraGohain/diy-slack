import React from 'react'
import { connect } from 'react-redux'
import Footer from '../Components/Footer'
import ChannelsList from '../Components/ChannelsList'
import Chat from '../Forms/Chat'
import UsersList from '../Components/UsersList'
import DisconnectButton from '../Components/DisconnectButton'
import { send } from 'store/websocket'

const Home = ({ dispatch }) => {
    return (
        <div >
            <div >
                <Chat />
                <div className="leftbar">
                    <button onClick={() => {
                        dispatch({ type: send, payload: { command: "users" } })
                    }}>
                        Online Users
                    </button>
                    <UsersList />
                    <hr />
                    <ChannelsList />
                </div>
                <Footer />
                <DisconnectButton />
            </div>
        </div>
    )
}

export default connect()(Home)