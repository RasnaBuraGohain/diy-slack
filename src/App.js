import React, { Component } from 'react'
import { connect } from 'react-redux'
import './App.css'
import Router from './Components/Router'
import DisconnectButton from './Components/DisconnectButton'
import ConnectButton from './Components/ConnectButton'
import Footer from './Components/Footer'
import NotFound from './Pages/NotFound'
import Home from './Pages/Home'
import LoginForm from './Forms/LoginForm'
import ChannelForm from './Forms/ChannelForm'

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

    if (!name) {
      return (
        <div>
          <div className="App">
            <LoginForm />
            <DisconnectButton />
          </div>
          <Footer />
        </div>
      )
    }

    return (
      <Router routes={{
        '/': Home,
        '/channel': ChannelForm,
        'error': NotFound,
      }} />
    )
  }


}

const mapStateToProps = state => ({
  location: state.router.pathname,
  messages: state.messages.log,
  connected: state.connection.connected,
  disconnected: !state.connection.connected,
  name: state.connection.name,
  id: state.connection.id,
  users: state.users.users,
  channels: state.channels.channels,
  message: state.private.log,
})

export default connect(mapStateToProps)(App)