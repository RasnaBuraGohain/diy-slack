import React, { Component } from 'react'
import { connect } from 'react-redux'
import './App.css'
//import { push } from 'redux-first-routing'
//import { match } from './router'
//import Nav from 'Components/Nav'
//import Websocket from './Websocket'

import DisconnectButton from './Components/DisconnectButton'
import ConnectButton from './Components/ConnectButton'
import LoginForm from './Components/LoginForm';


class App extends Component {
  render() {
    const {
      connected,
      messages,
    } = this.props
    if (!connected) {
      return <ConnectButton />
    }

    if (connected) {
      return (
        <div>
          <div className="App">
            <LoginForm />
            <hr />
            <DisconnectButton />
            <hr />
          </div>
          <footer>
            <p>Connection activity:</p>
            <ul>
              {messages.map(this.renderMessage)}
            </ul>
          </footer>
        </div>
      )
    }
  }
  renderMessage(message, idx) {
    return (
      <li key={idx}>
        <pre>{message}</pre>
      </li>
    )
  }

}

const mapStateToProps = state => ({
  location: state.location,
  messages: state.messages.log,
  connected: state.websocket.connected,
  disconnected: state.websocket.disconnected,
})

export default connect(mapStateToProps)(App);