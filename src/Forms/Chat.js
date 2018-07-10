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
    }
    render() {
        const {
            sendMessage,
            user,
        } = this.state

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
                        <SendToList selectUser={(e) => this.setState({ user: e.target.value })} />
                    </div>
                    Send message to :
                    <input
                        value={this.state.user}
                        onChange={(e) => this.setState({ user: e.target.value })} placeholder="Name..." />
                    <hr />
                    <span><PrivateLists /></span>
                    <hr />
                    <textarea
                        rows="2" cols="45"
                        value={sendMessage}
                        onChange={(e) => this.setState({ sendMessage: e.target.value })} placeholder="Write your message here..." >
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

export default connect(mapStateToProps)(Chat);