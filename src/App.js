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
//import LoginForm from './Forms/LoginForm'
import Login from './Pages/Login'
import ChannelForm from './Forms/ChannelForm';


class App extends Component {
  render() {
    const {
      connected,
      name,
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
            <Login />
            <hr />
            <DisconnectButton />
            <hr />
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
          </div>
          <Footer />
        </div>
      )
    }
    return (
      <Router routes={{
        '/': Home,
        '/profile': Profile,
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
  channel: state.connection.channel,
  users: state.connection.users,

})

export default connect(mapStateToProps)(App);