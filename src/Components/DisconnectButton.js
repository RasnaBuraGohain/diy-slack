import React from 'react'
import { connect } from 'react-redux'
import { disconnect } from 'store/websocket'

const DisconnectButton = ({ dispatch }) => (
    <button onClick={() => { dispatch({ type: disconnect }) }}>
        Disconnect
    </button >
)

const mapStateToProps = (state) => ({
    connected: state.websocket.connected,
})

export default connect(mapStateToProps)(DisconnectButton)