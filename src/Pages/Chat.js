import React, { Component } from 'react';
import { connect } from 'react-redux'
import { send } from '../store/websocket'
import UsersList from '../Components/UsersList';

class Chat extends Component {
    constructor() {
        super()
        this.state = {
            sendMessage: '',
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
            disconnected
        } = this.props;

        return (
            <div className="App">
                <div>
                    <h1>Chat Room</h1>
                    <hr />
                    <UsersList />
                </div>
                <div>
                    Send message to:
                    <input
                        value={user}
                        onChange={(e) => this.setState({ user: e.target.value })}
                    />
                    <textarea
                        value={sendMessage}
                        onChange={(e) => this.setState({ sendMessage: e.target.value })} placeholder="Write your message here..." >
                    </textarea>

                    <button onClick={() => {
                        let text = {
                            "command": "message", "user": "" +
                                user + "", "message": "" + sendMessage + ""
                        }
                        dispatch({ type: send, payload: text })
                    }}
                        disabled={disconnected}>
                        SEND
                    </button>
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    messages: state.messages.log,
    name: state.connection.name,
    id: state.connection.id,
    users: state.users.users,
    disconnected: !state.connection.connected,
})

export default connect(mapStateToProps)(Chat);