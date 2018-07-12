import React, { Component } from 'react';
import { connect } from 'react-redux'
import { send } from '../store/websocket'
import PrivateLists from '../Components/PrivateLists';

class Chat extends Component {
    constructor() {
        super()
        this.state = {
            sendMessage: 'Welcome to Chat App',
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
    renderExample = (message, index) => {
        const handler = event => {
            event.preventDefault()
            this.setState({ sendMessage: message })
        }

        return (
            <li key={index}>
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
            'How are you ?',
            'I am doing good, thank you.',
        ]
        const {
            dispatch,
            disconnected,
            name,
            users,
        } = this.props;

        return (
            <div className="App">
                <h1>Welcome <b>{name}</b>,</h1>
                <h3>to the Chat Room</h3>
                <div className="Chat" >
                    <label>Messages :</label>
                    <ul className="examples">
                        {examples.map(this.renderExample)}
                    </ul>
                    Send message to :
                    <select value={this.state.user} onChange={this.handleChange}>
                        {users.map(user => <option key={user.name} value={user.name}>{user.name}</option>)}
                    </select>
                    <hr />
                    <PrivateLists />
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