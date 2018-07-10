import React from 'react'
import { connect } from 'react-redux'
import { disconnect } from 'store/websocket'

const DisconnectButton = ({ dispatch }) => (
    <button className="logout" onClick={() => { dispatch({ type: disconnect }) }}>
        Log Out
    </button >
)

const mapStateToProps = (state) => ({
    connected: state.connection.connected,
})

export default connect(mapStateToProps)(DisconnectButton)