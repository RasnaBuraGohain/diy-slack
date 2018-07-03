import React, { Component } from 'react'
import { connect } from 'react-redux'
import './App.css'
import Router from './Components/Router'
import DisconnectButton from './Components/DisconnectButton'
import ConnectButton from './Components/ConnectButton'
import Footer from './Pages/Footer'
import NotFound from './Pages/NotFound'
import Home from './Pages/Home'
import Profile from './Pages/Profile'
import LoginForm from './Forms/LoginForm'
import ChannelForm from './Forms/ChannelForm';


class App extends Component {
  render() {
    const {
      connected,
      name,
      id,
      channel,
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
            <hr />
            <DisconnectButton />
            <hr />
          </div>
          <div className="sidebar">
            Your User ID
            <hr />
            {id}
          </div>
          <Footer />
        </div>
      )
    }
    if (!channel) {
      return (
        <div>
          <div className="App">
            <ChannelForm />
            <hr />
            <DisconnectButton />
            <hr />
          </div>
          <div className="sidebar">
            Your User ID
            <hr />
            {id + name}
          </div>
          <Footer />
        </div>
      )
    }
    return (
      <Router routes={{
        '/': Home,
        '/profile': Profile,
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
  users: state.connection.users,
  channels: state.connection.channels,
})

export default connect(mapStateToProps)(App);