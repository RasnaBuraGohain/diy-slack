import React from 'react'
import { connect } from 'react-redux'
import { connect as websocketConnect } from 'store/websocket'

const ConnectButton = ({ dispatch }) => (
  <button onClick={() => { dispatch({ type: websocketConnect }) }}>
    Connect
    </button >
)

const mapStateToProps = (state) => ({
  disconnected: !state.connection.connected,
})

export default connect(mapStateToProps)(ConnectButton)