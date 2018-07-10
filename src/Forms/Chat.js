import React, { Component } from 'react';
import { connect } from 'react-redux'
import { send } from '../store/websocket'
import PrivateLists from '../Components/PrivateLists';
import SendToList from '../Components/SendToList';

class Chat extends Component {
    constructor() {
        super()
        this.state = {
            sendMessage: 'Hello, how are you?',
            user: '',
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }
    handleChange(event) {
        this.setState({ user: event.target.value })
    }

    handleClick(user) {
        this.setState({ user: user.name })
    }
    renderExample = (message) => {
        const handler = event => {
            this.setState({ sendMessage: message })
        }

        return (
            <li>
                <button className="try"
                    disabled={this.props.disconnected}
                    onClick={handler}>
                    {message}
                </button>
            </li>
        )
    }
    render() {
        const {
            sendMessage,
            user,
        } = this.state
        const examples = [
            'Hi',
            'Hello',
            'How are you ?',
        ]
        const {
            dispatch,
            disconnected,
            name,
        } = this.props;

        return (
            <div className="App">
                <div>
                    <h1>Welcome <b>{name}</b>,</h1>
                    to Chat Room
                </div>
                <div className="Chat" >
                    <div>
                        <SendToList selectUser={this.handleClick} />
                    </div>
                    <label>Messages :</label>
                    <ul>
                        {examples.map(this.renderExample)}
                    </ul>
                    Send message to :
                    <input
                        value={this.state.user}
                        onChange={this.handleChange} placeholder="Name..." />
                    <hr />
                    <span><PrivateLists /></span>
                    <hr />
                    <textarea
                        rows="2" cols="45"
                        value={sendMessage}
                        onChange={(event) => this.setState({ sendMessage: event.target.value })} placeholder="Write your message here..." >
                    </textarea>

                    <button className="chatbutton" onClick={() => {
                        let text = {
                            command: "message",
                            id: name,
                            user: user,
                            message: sendMessage,
                        }
                        dispatch({ type: send, payload: text })
                    }}
                        disabled={disconnected}>
                        SEND
                    </button>
                </div>
            </div >
        )
    }
}

const mapStateToProps = (state) => ({
    messages: state.messages.log,
    name: state.connection.name,
    id: state.connection.id,
    users: state.users.users,
    disconnected: !state.connection.connected,
    message: state.private.log,
})

export default connect(mapStateToProps)(Chat)