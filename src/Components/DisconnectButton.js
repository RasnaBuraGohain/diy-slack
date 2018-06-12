import React from 'react'
import { connect } from 'react-redux'

const DisconnectButton = ({ dispatch, onDisconnect }) => (
    <button>
        DISCONNECT
    </button>
)

export default connect()(DisconnectButton)