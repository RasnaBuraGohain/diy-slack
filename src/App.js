import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'redux-first-routing'
import { match } from './router'
import Nav from 'Components/Nav'
//import Websocket from './Websocket'


import './App.css'

class App extends Component {
  render() {
    const {messages, dispatch, loggedIn } = this.props

    const { route, params } = match(this.props.location.pathname)
    if (route.loggedIn && !loggedIn) {
      dispatch(push('/'))
      return null
    }

    const Page = route.page
    return (
      <div>
        <Nav />
        <hr />
        <Page {...params} />
        <hr />
        <footer>
        <p>Connection activity:</p>
          <ul>
            {messages.map(this.renderMessage)}
          </ul>
        </footer>
      </div>

    );
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
  state,
})

export default connect(mapStateToProps)(App);