import React, { Component } from 'react'
import { connect } from 'react-redux'
import './App.css'
import Router from './Components/Router'
import Websocket from './Websocket'
import DisconnectButton from './Components/DisconnectButton'
import ConnectButton from './Components/ConnectButton'
import LoginForm from './Forms/LoginForm'
import Footer from './Pages/Footer'
import NotFound from './Pages/NotFound'
import Home from './Pages/Home'

class App extends Component {
  render() {
    const {
      connected,
      id,
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
    if (connected && id) {
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
        'error': NotFound,
      }} />
    )
  }


}

const mapStateToProps = state => ({
  location: state.location,
  messages: state.messages.log,
  connected: state.connection.connected,
  disconnected: state.connection.disconnected,
  id: state.connection.id,
})

export default connect(mapStateToProps)(App);