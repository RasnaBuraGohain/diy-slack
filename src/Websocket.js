import React, { Component } from 'react';
import { connect } from 'react-redux'
import { send, disconnect } from './store/websocket'

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
      dispatch,
    } = this.props

    return (
      <div className="App">
        <div>
          <h1>Chat Room</h1>
          <p>An example of a call would be to send:</p>
          <ul>
            <li><code>{'{'}"command": "echo", "payload": "test"{'}'}</code></li>
            <li><code>{'{'}"command": "name", "name": "rasna"{'}'}</code></li>
            <li><code>{'{'}"command": "message", "user": "rasna", "data": "hello"{'}'}</code></li>
          </ul>
        </div>
        <div>
          Send message:
          <textarea
            value={input}
            onChange={(e) => this.setState({ input: e.target.value })} placeholder="Write your message here..." >
          </textarea>

          <button onClick={() => { dispatch({ type: send, payload: input }) }}
            disabled={disconnect}>
            SEND
          </button>
        </div>

      </div>
    );
  }

}

const mapStateToProps = (state) => ({
  messages: state.messages.log,
})

export default connect(mapStateToProps)(Websocket);