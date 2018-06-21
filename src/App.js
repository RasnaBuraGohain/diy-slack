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
<<<<<<< HEAD
      id,
=======
      channel,
>>>>>>> 96352aa99a28a5e9f31c13649f5710759f4aaddd
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
<<<<<<< HEAD
            <LoginForm />
=======
            <Login />
>>>>>>> 96352aa99a28a5e9f31c13649f5710759f4aaddd
            <hr />
            <DisconnectButton />
            <hr />
          </div>
          <div className="sidebar">
            <h> Your User ID </h>
            <hr />
            {id}
          </div>
          <Footer />
        </div>
      )
    }

<<<<<<< HEAD
=======
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
>>>>>>> 96352aa99a28a5e9f31c13649f5710759f4aaddd
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
<<<<<<< HEAD
  id: state.connection.id,
=======
  channel: state.connection.channel,
  users: state.connection.users,

>>>>>>> 96352aa99a28a5e9f31c13649f5710759f4aaddd
})

export default connect(mapStateToProps)(App);