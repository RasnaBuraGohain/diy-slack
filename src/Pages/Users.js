import React, { Component } from 'react';
import { connect } from 'react-redux'

class UsersView extends Component {
    render() {
        const {
            messages,
        } = this.props

        return (
            <div>
                <leftbar>
                    <p>online users</p>
                    <ul>
                        {messages.filter(this.renderMessage)}
                    </ul>
                </leftbar>
            </div>
        )
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
    messages: state.messages.log,
})

export default connect(mapStateToProps)(UsersView)
