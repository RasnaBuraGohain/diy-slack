import React from 'react'
import { connect } from 'react-redux'
//import { push } from 'redux-first-routing'
//import ChatForm from 'Components/ChatForm'
import Websocket from 'Websocket'

const Chat = ({ dispatch }) => (
    <main>

        <Websocket />
        <hr />
    </main>
)

export default connect()(Chat)