import React from 'react'
import { connect } from 'react-redux'
import Websocket from 'Websocket'

const Chat = () => (
    <main>
        <Websocket />
        <hr />
    </main>
)

export default connect()(Chat)