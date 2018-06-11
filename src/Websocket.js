import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { send } from './store/websocket'
import { login } from 'store/user'

class Websocket extends Component {
  constructor() {
    super()
    this.state = { input: '' }
  }

  render() {
    const {
      input,
    } = this.state

    const {
      messages,
      dispatch,
    } = this.props

    return (
      <div className="App">
        <div>
          <h1>Chat Room</h1>
          <p>
            {login}
          </p>

          <p>An example of a call would be to send:</p>
          <ul>
            <li><code>{'{'}"command": "echo", "payload": "test"{'}'}</code></li>
            <li><code>{'{'}"command": "name", "name": "olmo"{'}'}</code></li>
            <li><code>{'{'}"command": "message", "user": "olmo", "data": "hello"{'}'}</code></li>
          </ul>
        </div>
        <div>
          Send message:
          <textarea
            value={input}
            onChange={(e) => this.setState({ input: e.target.value })}>
          </textarea>

          <button onClick={() => { dispatch({ type: send, payload: input }) }}>
            SEND
          </button>
        </div>
        <div>
          <p>Connection activity:</p>
          <ul>
            {messages.map(this.renderMessage)}
          </ul>
        </div>
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

const mapStateToProps = (state) => ({
  messages: state.messages.log,
})

export default connect(mapStateToProps)(Websocket);