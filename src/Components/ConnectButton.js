import React from 'react'
import { connect } from 'react-redux'
import { connect as websocketConnect } from 'store/websocket'
import chat from './chat.svg'

const ConnectButton = ({ dispatch }) => (
  <div >
    <h1>Welcome to Diy Slack</h1>
      <img src={chat} alt="welcome" width="800" height="170"></img>
    <br />
    <h2> You must first connect to <code>chat-backend</code></h2>
    <ul>
      <li> Open Command Prompt on your Computer</li>
      <li> First install (or update) the backend: <dd><code>go get -u -v github.com/ojz/chat-backend </code></dd></li>
      <li> Next, start the backend:<dd><code>cd go</code></dd></li>
      <dd> <code>cd bin</code></dd>
      <dd> <code>chat-backend</code></dd>
      </ul>
      Once connected you can start by clicking 
  <button onClick={() => { dispatch({ type: websocketConnect }) }}>
    Connect
  </button >
  </div >
)

const mapStateToProps = (state) => ({
  disconnected: !state.connection.connected,
})

export default connect(mapStateToProps)(ConnectButton)