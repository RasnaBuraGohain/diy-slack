import React from 'react'
import { connect } from 'react-redux'
import { push } from 'redux-first-routing'
import ChatForm from 'Components/ChatForm'

const Chat = ({ dispatch }) => (
    <main>
        <ChatForm onChat={() => dispatch(push("/chat"))} />
    </main>
)

export default connect()(Chat)