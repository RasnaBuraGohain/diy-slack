import React, { Component } from 'react';
import { connect } from 'react-redux'
import { send } from './store/websocket'
import UsersList from './Components/UsersList';

class Websocket extends Component {
  constructor() {
    super()
    this.state = { input: '' }
  }

  renderExample = (message) => {
    const handler = event => {
      this.props.dispatch({ type: send, payload: JSON.parse(message) })
      this.setState({
        input: message,
      })
    }

    return (
      <li>
        <code>{message}</code>
        <button className="try"
          disabled={this.props.disconnected}
          onClick={handler}>
          try
          </button>
      </li>
    )
  }

  render() {
    const {
      input,
    } = this.state

    const examples = [
      '{ "command": "name", "name": "olmo" }',
      '{ "command": "users" }',
      '{ "command": "join", "channel": "#test" }',
      '{ "command": "channels" }',
      '{ "command": "message", "channel": "#test", "message": "hello world!" }',
      '{ "command": "part", "channel": "#test" }',
    ]

    const {
      dispatch,
      disconnected,

    } = this.props

    return (
      <div className="App">
        <div>
          <h1>Chat Room</h1>
          <p>An example of a call would be to send:</p>
          <ul>
            {examples.map(this.renderExample)}
          </ul>
        </div>
        <hr />
        <UsersList />
        <div>
          Send message:
          <textarea
            value={input}
            onChange={(e) => this.setState({ input: e.target.value })} placeholder="Write your message here..." >
          </textarea>

          <button onClick={() => { dispatch({ type: send, payload: JSON.parse(input) }) }}
            disabled={disconnected}>
            SEND
          </button>
        </div>

      </div>
    );
  }

}

const mapStateToProps = (state) => ({
  name: state.connection.name,
  id: state.connection.id,
  messages: state.messages.log,
  users: state.users.users,
  channels: state.channels.channels,
  disconnected: !state.connection.connected,
})

export default connect(mapStateToProps)(Websocket);