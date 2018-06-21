import React from 'react'
import { connect } from 'react-redux'
import { push } from 'redux-first-routing'
import ChannelForm from 'Forms/ChannelForm'

const ChannelView = ({ dispatch }) => (
    <main>
        <h1>The Channel page</h1>
        <ChannelForm onClick={() => dispatch(push("/channel"))} />
    </main>
)

export default connect()(ChannelView)