import React, { Component } from 'react'
import { connect } from 'react-redux'
import './App.css'
//import { push } from 'redux-first-routing'
//import { match } from './router'
//import Nav from 'Components/Nav'
//import Websocket from './Websocket'

import DisconnectButton from './Components/DisconnectButton'
import ConnectButton from './Components/ConnectButton'
import LoginForm from './Components/LoginForm'
import Footer from './Pages/Footer'


class App extends Component {
  render() {
    const {
      connected,

    } = this.props
    if (!connected) {
      return (
        <div>
          <div className="App">
            <ConnectButton />
          </div>
          <Footer />
        </div>
      )
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
          <Footer />
        </div>
      )
    }
  }


}

const mapStateToProps = state => ({
  location: state.location,
  messages: state.messages.log,
  connected: state.websocket.connected,
  disconnected: state.websocket.disconnected,
})

export default connect(mapStateToProps)(App);