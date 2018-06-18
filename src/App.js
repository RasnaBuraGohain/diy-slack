import React, { Component } from 'react'
import { connect } from 'react-redux'
import './App.css'
import Router from './Components/Router'
import Websocket from './Websocket'
import DisconnectButton from './Components/DisconnectButton'
import ConnectButton from './Components/ConnectButton'
import Footer from './Pages/Footer'
import NotFound from './Pages/NotFound'
import Home from './Pages/Home'
import Chat from './Pages/Chat'

class App extends Component {
  render() {
    const {
      connected,
      name,
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
          <div>
            <Home />
            <hr />
            <DisconnectButton />
            <hr />
          </div>
          <Footer />
        </div>
      )
    }
    if (connected && name) {
      return (
        <div>
          <div className="App">
            <Websocket />
          </div>
          <Footer />
        </div>
      )
    }
    return (
      <Router routes={{
        '/': Home,
        '/home/Chat': Chat,
        'error': NotFound,
      }} />
    )
  }


}

const mapStateToProps = state => ({
  location: state.location,
  messages: state.messages.log,
  connected: state.connection.connected,
  disconnected: !state.connection.connected,
  name: state.connection.name,
})

export default connect(mapStateToProps)(App);