import React from 'react'
import { connect } from 'react-redux'
import { push } from 'redux-first-routing'
import ChannelForm from 'Forms/ChannelForm'

const ChannelView = ({ channels, dispatch }) => {
    const list = channels.map((channel, idx) => (
        <li key={idx}>
            <button>{channel}</button>
            <ChannelForm onClick={() => dispatch(push("/channel"))} />
            <div>Channels:
                    <ul>{list}</ul>
            </div>
        </li>
    ))

}

export default connect()(ChannelView)
