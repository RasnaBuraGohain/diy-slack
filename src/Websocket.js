import React, { Component } from 'react';
import {login} from 'store/user'
//import { connect } from 'react-redux'

class Websocket extends Component {
  constructor() {
    super()
    this.state = {
      ws: null,
      connected: false,
      messages: []
    }
  }

  componentWillMount() {
    const ws = new WebSocket("ws://localhost:8085/api/stream");

    ws.onopen = (evt) => this.setState({
      messages: [...this.state.messages, "you are online now"],
      connected: true
    })

    ws.onclose = (evt) => this.setState({
      messages: [...this.state.messages, "you are offline now"],
      connected: false
    })

    ws.onmessage = (evt) => this.setState({
      messages: [...this.state.messages, "message received: " + evt.data],
    })

    ws.onerror = (evt) => console.error("ERROR: " + evt.data);

    this.setState({ ws })
  }

  render() {
    const {
      input,
      messages,
    } = this.state

    return (
      <div className="App">
        <div>
          <h1>Chat Room</h1>
          <p>
            {login}
          </p>

          <p>An example of a call would be to send:</p>
          <pre>{'{'}"command": "echo", "payload": "test"{'}'}</pre>
        </div>
        <div>
          Send message:
          <textarea
            value={input}
            onChange={(e) => this.setState({ input: e.target.value })}>
          </textarea>

          <button onClick={() => this.state.ws.send(this.state.input)}>
            send
          </button>
        </div>
        <div>
          <p>Websocket activity:</p>
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

export default Websocket;